import React from "react";
import { AttendeeListItem } from "../../../../types/event";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

interface ParticipantsDisplayProps {
    variant: "edit" | "details";
    attendee_list: AttendeeListItem[];
}

const ParticipantsDisplay: React.FC<ParticipantsDisplayProps> = ({
    attendee_list,
    variant,
}) => {
    return (
        <>
            <Typography variant="h6" fontWeight={700}>
                {variant === "details"
                    ? "Attended/Attending Participants"
                    : "Expected Participants"}
            </Typography>
            <TableContainer component={Box}>
                <Table sx={{ minWidth: 600 }}>
                    <TableHead>
                        <TableRow component="th">
                            {[
                                "Attended/Attending",
                                "Participation Status",
                                "Reasons of Abscence",
                            ].map((str) => (
                                <TableCell sx={{ fontWeight: 600 }} key={str}>
                                    {str}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {attendee_list.map(
                            ({
                                user_name,
                                attendance_status,
                                cancellation_reason,
                            }) => (
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                    key={user_name}
                                >
                                    {[
                                        user_name,
                                        attendance_status,
                                        cancellation_reason,
                                    ].map((it, index) => (
                                        <TableCell key={`${it}-${index}`}>
                                            {it}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ParticipantsDisplay;
