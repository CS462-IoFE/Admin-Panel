import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { EventFilterI } from "../../../zod-schema/eventFilterSchema";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import DeleteEventDialog from "../dialog/DeleteEventDialog";
import useEvents from "../../../custom-hooks/react-query/event/useEvents";
import timeParser from "../../../helper-functions/timeparser";

interface EventListingTableProps {}

const EventListingTable: React.FC<EventListingTableProps> = ({}) => {
    const { watch } = useFormContext<EventFilterI>();
    const [sort, isUpcoming] = watch(["sort", "is_upcoming"]);
    const navigate = useNavigate();
    const { data: events } = useEvents(isUpcoming);

    return (
        <TableContainer component={Box}>
            <Table sx={{ minWidth: 800 }}>
                <TableHead>
                    <TableRow>
                        {[
                            "Event Name",
                            "Date",
                            "Location",
                            "Time",
                            "Actions",
                        ].map((str) => (
                            <TableCell sx={{ fontWeight: 600 }} key={str}>
                                {str}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events &&
                        events
                            .map((row) => ({
                                ...row,
                                date: dayjs(row.event_date),
                            }))
                            .sort((a, b) =>
                                (
                                    sort === "date-descending"
                                        ? a.date.isBefore(b.date)
                                        : a.date.isAfter(b.date)
                                )
                                    ? 1
                                    : -1
                            )
                            .map(
                                ({
                                    _id: id,
                                    event_name,
                                    date,
                                    event_location,
                                    start_time,
                                    end_time,
                                }) => (
                                    <TableRow
                                        key={id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        {[
                                            event_name,
                                            date.format("DD MMM YYYY"),
                                            event_location.formatted_address,
                                            `${timeParser(
                                                start_time
                                            )}-${timeParser(end_time)}`,
                                        ].map((it, index) => (
                                            <TableCell key={`${id}-${index}`}>
                                                {it}
                                            </TableCell>
                                        ))}
                                        {isUpcoming ? (
                                            <TableCell>
                                                <Button
                                                    sx={{ mr: 1 }}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() =>
                                                        navigate(
                                                            `/event/${id}/edit`
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <DeleteEventDialog
                                                    {...{
                                                        id,
                                                        name: event_name,
                                                    }}
                                                />
                                            </TableCell>
                                        ) : (
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() =>
                                                        navigate(`/event/${id}`)
                                                    }
                                                >
                                                    View Details
                                                </Button>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                )
                            )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EventListingTable;
