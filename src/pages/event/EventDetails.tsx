import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventDetailsDisplay from "../../components/event/section/display/EventDetailsDisplay";
import ParticipantsDisplay from "../../components/event/section/display/ParticipantsDisplay";
import StaffPresentDisplay from "../../components/event/section/display/StaffPresentDisplay";
import useEventById from "../../custom-hooks/react-query/event/useEventById";

interface EventDetailsProps {}

const EventDetails: React.FC<EventDetailsProps> = ({}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const { data: event } = useEventById(id || "");

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                Event Details
            </Typography>
            <Grid container direction="column">
                {event && (
                    <>
                        <EventDetailsDisplay {...event} />
                        <Divider sx={{ mb: 2, mt: 4 }} />
                        <ParticipantsDisplay
                            variant="details"
                            attendee_list={event.participants}
                        />
                        <Divider sx={{ mb: 2, mt: 4 }} />
                        <StaffPresentDisplay staff_list={event.staff} />
                    </>
                )}
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
