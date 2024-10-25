import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import EssentialItem from "../../form/field-array/EssentialItem";

interface EssentialItemsSectionProps {}

const EssentialItemsSection: React.FC<EssentialItemsSectionProps> = ({}) => {
    const { control } = useFormContext();
    const { append, remove, fields } = useFieldArray({
        control,
        name: "essential_item",
    });

    return (
        <>
            <Typography variant="h6" fontWeight={600} mb={2}>
                Essential Items
            </Typography>
            <Grid container direction="column" gap={2}>
                {fields.map((field, index) => (
                    <EssentialItem
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
                        Add Essential Item
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default EssentialItemsSection;
