import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container, Typography } from "@mui/material";
import React from "react";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = ({}) => {
    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={6}>
                Events Calendar
            </Typography>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        </Container>
    );
};

export default Calendar;
