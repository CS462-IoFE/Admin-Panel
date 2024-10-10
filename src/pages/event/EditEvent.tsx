import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ParticipantsDisplay from "../../components/event/section/display/ParticipantsDisplay";
import BasicEventDetailsSection from "../../components/event/section/form/BasicEventDetailsSection";
import StaffPresentSection from "../../components/event/section/form/StaffPresentSection";
import usePopulateEventDetailForm from "../../custom-hooks/form/usePopulateEventDetailsForm";
import useEventById from "../../custom-hooks/react-query/event/useEventById";
import {
    EditEventFormI,
    editEventSchema,
} from "../../zod-schema/editEventSchema";
import useEditEvent from "../../custom-hooks/react-query/event/useEditEvent";

interface EditEventProps {}

const EditEvent: React.FC<EditEventProps> = ({}) => {
    const { id } = useParams();
    const { data: event } = useEventById(id);
    const navigate = useNavigate();

    const formState = useForm<EditEventFormI>({
        resolver: zodResolver(editEventSchema),
    });
    const { handleSubmit } = formState;

    usePopulateEventDetailForm(formState, event);
    const { mutate, isSuccess } = useEditEvent();

    useEffect(() => {
        if (isSuccess) navigate("/event");
    }, [isSuccess]);

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
                        attendee_list={event?.participants ?? []}
                    />
                    <Divider sx={{ mb: 2, mt: 4 }} />
                    <StaffPresentSection />
                    <Divider sx={{ my: 2 }} />
                    <Grid item>
                        <Button
                            sx={{ float: "right" }}
                            onClick={handleSubmit((data) => mutate(data))}
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
