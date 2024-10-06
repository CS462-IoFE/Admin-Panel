import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicEventDetailsSection from "../../components/event/section/form/BasicEventDetailsSection";

interface AddEventProps {}

const AddEvent: React.FC<AddEventProps> = ({}) => {
    const formState = useForm();
    const { handleSubmit } = formState;

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                Add Event
            </Typography>
            <FormProvider {...formState}>
                <Grid container direction="column">
                    <BasicEventDetailsSection />
                    <Divider />

                    <Divider />
                </Grid>
            </FormProvider>
            <Button
                onClick={handleSubmit((data) => console.log(data))}
                variant="contained"
                color="success"
            >
                Submit Event
            </Button>
        </Container>
    );
};

export default AddEvent;
