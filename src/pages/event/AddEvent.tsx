import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicEventDetailsSection from "../../components/event/section/form/BasicEventDetailsSection";
import StaffPresentSection from "../../components/event/section/form/StaffPresentSection";
import PossibleMeetingLocationSection from "../../components/event/section/form/PossibleMeetingLocationsSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEventSchema } from "../../zod-schema/addEventSchema";

interface AddEventProps {}

const AddEvent: React.FC<AddEventProps> = ({}) => {
    const formState = useForm({ resolver: zodResolver(addEventSchema) });
    const { handleSubmit } = formState;

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                Add Event
            </Typography>
            <FormProvider {...formState}>
                <Grid container direction="column">
                    <BasicEventDetailsSection />
                    <Divider sx={{ mb: 2, mt: 4 }} />
                    <PossibleMeetingLocationSection />
                    <Divider sx={{ mb: 2, mt: 4 }} />
                    <StaffPresentSection />
                    <Divider sx={{ my: 2 }} />
                    <Grid item>
                        <Button
                            sx={{ float: "right" }}
                            onClick={handleSubmit((data) => console.log(data))}
                            variant="contained"
                            color="success"
                        >
                            Submit Event
                        </Button>
                    </Grid>
                </Grid>
            </FormProvider>
        </Container>
    );
};

export default AddEvent;
