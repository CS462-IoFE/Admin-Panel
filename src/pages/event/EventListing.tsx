import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import EventListingActions from "../../components/event/actions/EventListingActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventFilterSchema } from "../../zod-schema/eventFilterSchema";
import EventListingTable from "../../components/event/table/EventListingTable";
import { useNavigate } from "react-router-dom";

interface EventListingProps {}

const EventListing: React.FC<EventListingProps> = ({}) => {
    const navigate = useNavigate()
    const formState = useForm({ resolver: zodResolver(eventFilterSchema) });
    const { watch } = formState;
    const values = watch();

    useEffect(() => {
        console.log(values);
    }, [watch, values]);

    return (
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
                    <FormProvider {...formState}>
                        <EventListingActions />
                    </FormProvider>
                </Grid>
                <Grid item>
                    <Button onClick={() => navigate("/event/add")} variant="contained" color="success">
                        Add New Event
                    </Button>
                </Grid>
            </Grid>
            <EventListingTable />
        </Container>
    );
};

export default EventListing;
