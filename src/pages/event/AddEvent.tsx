import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BasicEventDetailsSection from "../../components/event/section/form/BasicEventDetailsSection";
import PossibleMeetingLocationSection from "../../components/event/section/form/PossibleMeetingLocationsSection";
import StaffPresentSection from "../../components/event/section/form/StaffPresentSection";
import useAddEvent from "../../custom-hooks/react-query/event/useAddEvent";
import { AddEventFormI, addEventSchema } from "../../zod-schema/addEventSchema";

interface AddEventProps {}

const AddEvent: React.FC<AddEventProps> = ({}) => {
    const navigate = useNavigate();
    const formState = useForm<AddEventFormI>({
        resolver: zodResolver(addEventSchema),
    });
    const { handleSubmit } = formState;
    const { mutate, isSuccess } = useAddEvent();

    useEffect(() => {
        if (isSuccess) navigate("/event");
    }, [isSuccess]);

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
                            onClick={handleSubmit(
                                (data) => mutate(data),
                                () =>
                                    enqueueSnackbar(
                                        "There are invalid inputs, please check your form again!",
                                        { variant: "error" }
                                    )
                            )}
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
