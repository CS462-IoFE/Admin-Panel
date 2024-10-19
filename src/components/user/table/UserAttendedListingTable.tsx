import {
    Box,
    Button,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AttendedEventListingItem } from "../../../types/user";

interface UserAttendedListingTableProps {
    events: AttendedEventListingItem[];
}

const UserAttendedListingTable: React.FC<UserAttendedListingTableProps> = ({
    events,
}) => {
    const navigate = useNavigate();

    return (
        <>
            <Typography my={2} variant="h6" fontWeight={600}>
                Attended Events
            </Typography>
            <TableContainer component={Box} maxHeight={500}>
                <Table stickyHeader sx={{ minWidth: 800 }}>
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
                        {events.map(
                            ({
                                _id: id,
                                event_name: name,
                                event_date: date,
                                event_location: location,
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
                                        date,
                                        location.name,
                                        `${start_time}-${end_time}`,
                                    ].map((it, index) => (
                                        <TableCell key={`${id}-${index}`}>
                                            {it}
                                        </TableCell>
                                    ))}

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
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider />
        </>
    );
};

export default UserAttendedListingTable;
