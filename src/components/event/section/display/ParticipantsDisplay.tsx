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
    attendee_list: AttendeeListItem[];
}

const ParticipantsDisplay: React.FC<ParticipantsDisplayProps> = ({
    attendee_list,
}) => {
    return (
        <>
            <Typography variant="h6" fontWeight={700}>Attended/Attending Participants</Typography>
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
                        {attendee_list.map(({ name, status, reason }) => (
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                                key={name}
                            >
                                {[name, status, reason].map((it, index) => (
                                    <TableCell key={`${it}-${index}`}>
                                        {it}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ParticipantsDisplay;
