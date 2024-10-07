import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { EventDetails as EventDetailsType } from "../../types/event";
import EventDetailsDisplay from "../../components/event/section/display/EventDetailsDisplay";
import ParticipantsDisplay from "../../components/event/section/display/ParticipantsDisplay";
import StaffPresentDisplay from "../../components/event/section/display/StaffPresentDisplay";

interface EventDetailsProps {}

const data: EventDetailsType = {
    name_en: "Mass Acitivity - Water Related",
    name_cn: "多人 - 水上活动",
    date: "08 Jan 2024",
    start_time: "10:00am",
    end_time: "12:00pm",
    location: {
        formatted_address: "81 Victoria St, Singapore 188065",
        lat: 1.2962727,
        lon: 103.8501578,
        name: "Singapore Management University",
    },
    meeting_location: "Redhill MRT Station",
    accessibility: false,
    attendee_list: [
        {
            name: "Rauda",
            status: "Active",
            reason: undefined,
        },
        {
            name: "Joyce Han",
            status: "Cancelled",
            reason: "Urgent Matters",
        },
    ],
    staff_list: ["Julia", "Slyvester"],
};

const EventDetails: React.FC<EventDetailsProps> = ({}) => {
    const navigate = useNavigate();
    const { attendee_list, staff_list, ...rest } = data;

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                Event Details
            </Typography>
            <Grid container direction="column">
                <EventDetailsDisplay {...rest} />
                <Divider sx={{ mb: 2, mt: 4 }} />
                <ParticipantsDisplay attendee_list={attendee_list} />
                <Divider sx={{ mb: 2, mt: 4 }} />
                <StaffPresentDisplay staff_list={staff_list} />{" "}
                <Divider sx={{ my: 2 }} />
                <Grid item>
                    <Button
                        sx={{ float: "right" }}
                        variant="contained"
                        color="secondary"
                        onClick={() => navigate("/event")}
                    >
                        Back to Event Listing
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EventDetails;
