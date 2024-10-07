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
import { EventListingItem } from "../../../types/event";
import { useFormContext } from "react-hook-form";
import { EventFilterI } from "../../../zod-schema/eventFilterSchema";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import DeleteEventDialog from "../dialog/DeleteEventDialog";

interface EventListingTableProps {}

const rows: EventListingItem[] = [
    {
        id: "1",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "2",
        name: "Mass Activity - Water Related",
        date: "08 Feb 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "3",
        name: "Mass Activity - Water Related",
        date: "08 Mar 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "4",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "5",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "6",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "7",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "8",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "9",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
    {
        id: "10",
        name: "Mass Activity - Water Related",
        date: "08 Jan 2024",
        location: "Delta Swimming Complex",
        start_time: "10:00am",
        end_time: "12:00pm",
    },
];

const EventListingTable: React.FC<EventListingTableProps> = ({}) => {
    const { watch } = useFormContext<EventFilterI>();
    const [sort, isUpcoming] = watch(["sort", "is_upcoming"]);
    const navigate = useNavigate();

    return (
        <TableContainer component={Box}>
            <Table sx={{ minWidth: 800 }}>
                <TableHead>
                    <TableRow component="th">
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
                    {rows
                        .map((row) => ({
                            ...row,
                            date: dayjs(row.date, "DD MMM YYYY"),
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
                                id,
                                name,
                                date,
                                location,
                                start_time,
                                end_time,
                            }) => (
                                <TableRow
                                    key={id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    {[
                                        name,
                                        date.format("DD MMM YYYY"),
                                        location,
                                        `${start_time}-${end_time}`,
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
                                                {...{ id, name }}
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
