import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import StaffPresentItem from "../../form/field-array/StaffPresentItem";

interface StaffPresentSectionProps {}

const StaffPresentSection: React.FC<StaffPresentSectionProps> = ({}) => {
    const { control } = useFormContext();
    const { append, remove, fields } = useFieldArray({
        control,
        name: "staff_present",
    });

    return (
        <>
            <Typography variant="h6" fontWeight={600} mb={2}>
                Staff Present
            </Typography>
            <Grid container direction="column" gap={2}>
                {fields.map((field, index) => (
                    <StaffPresentItem
                        remove={remove}
                        key={field.id}
                        index={index}
                    />
                ))}
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => append({ name: "" })}
                    >
                        Add Staff
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default StaffPresentSection;
