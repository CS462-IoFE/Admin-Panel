import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicEventDetailsSection from "../../components/event/section/form/BasicEventDetailsSection";
import EssentialItemsSection from "../../components/event/section/form/EssentialItemsSection";
import PossibleMeetingLocationSection from "../../components/event/section/form/PossibleMeetingLocationsSection";
import StaffPresentSection from "../../components/event/section/form/StaffPresentSection";
import useAddEvent from "../../custom-hooks/react-query/event/useAddEvent";
import { AddEventFormI, addEventSchema } from "../../zod-schema/addEventSchema";

interface AddEventProps {}

const AddEvent: React.FC<AddEventProps> = ({}) => {
    const formState = useForm<AddEventFormI>({
        resolver: zodResolver(addEventSchema),
        defaultValues: {
            essential_item: [
                { name: "Water Bottle" },
                { name: "Umbrella" },
                { name: "Wallet" },
            ],
        },
    });
    const { handleSubmit } = formState;
    const { mutate } = useAddEvent();

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
                    <Divider sx={{ mb: 2, mt: 4 }} />
                    <EssentialItemsSection />
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
