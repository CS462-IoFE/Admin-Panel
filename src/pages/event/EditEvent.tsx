import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicEventDetailsSection from "../../components/event/section/form/BasicEventDetailsSection";
import StaffPresentSection from "../../components/event/section/form/StaffPresentSection";
import ParticipantsDisplay from "../../components/event/section/display/ParticipantsDisplay";
import { AttendeeListItem } from "../../types/event";
import { zodResolver } from "@hookform/resolvers/zod";
import { editEventSchema } from "../../zod-schema/editEventSchema";

interface EditEventProps {}

const attendee_list: AttendeeListItem[] = [
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
];

const EditEvent: React.FC<EditEventProps> = ({}) => {
    const formState = useForm({resolver: zodResolver(editEventSchema)});
    const { handleSubmit } = formState;

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                Edit Event
            </Typography>
            <FormProvider {...formState}>
                <Grid container direction="column">
                    <BasicEventDetailsSection />
                    <Divider sx={{ mb: 2, mt: 4 }} />
                    <ParticipantsDisplay
                        variant="edit"
                        attendee_list={attendee_list}
                    />
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
                            Confirm Edit Event
                        </Button>
                    </Grid>
                </Grid>
            </FormProvider>
        </Container>
    );
};

export default EditEvent;
