import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import MeetingLocationItem from "../../form/field-array/MeetingLocationItem";

interface PossibleMeetingLocationSectionProps {}

const PossibleMeetingLocationSection: React.FC<
    PossibleMeetingLocationSectionProps
> = ({}) => {
    const { control } = useFormContext();
    const { append, remove, fields } = useFieldArray({
        control,
        name: "meeting_locations",
    });

    return (
        <>
            <Typography variant="h6" fontWeight={600} mb={2}>
                Possible Meeting Location
            </Typography>
            <Grid container direction="column" gap={2}>
                {fields.map((field, index) => (
                    <MeetingLocationItem
                        key={field.id}
                        index={index}
                        remove={remove}
                    />
                ))}
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => append({ name: "" })}
                    >
                        Add Meeting Location
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default PossibleMeetingLocationSection;
