import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EventListingActions from "../../components/event/actions/EventListingActions";
import EventListingTable from "../../components/event/table/EventListingTable";
import {
    eventFilterSchema
} from "../../zod-schema/eventFilterSchema";

interface EventListingProps {}

const EventListing: React.FC<EventListingProps> = ({}) => {
    const navigate = useNavigate();
    const formState = useForm({
        resolver: zodResolver(eventFilterSchema),
    });

    return (
        <FormProvider {...formState}>
            <Container maxWidth="xl" sx={{ my: 4 }}>
                <Typography variant="h3" mb={4}>
                    Events Listing
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <EventListingActions />
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() => navigate("/event/add")}
                            variant="contained"
                            color="success"
                        >
                            Add New Event
                        </Button>
                    </Grid>
                </Grid>
                <EventListingTable />
            </Container>
        </FormProvider>
    );
};

export default EventListing;
