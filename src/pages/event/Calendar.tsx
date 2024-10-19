import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Container, Typography } from "@mui/material";
import React from "react";
import useCalendarEvent from "../../custom-hooks/calendar/useCalendarEvent";
import useEvents from "../../custom-hooks/react-query/event/useEvents";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = ({}) => {
    const navigate = useNavigate();

    const { data: pastEvents } = useEvents(false);
    const { data: upcomingEvents } = useEvents(true);
    const events = useCalendarEvent(pastEvents ?? [], upcomingEvents ?? []);

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={6}>
                Events Calendar
            </Typography>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventClick={({ event }) =>
                    navigate(
                        `/event/${event.id}/${
                            dayjs(event.start).isAfter(dayjs()) ? "edit" : ""
                        }`
                    )
                }
            />
        </Container>
    );
};

export default Calendar;
