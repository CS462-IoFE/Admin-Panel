import { Button, Grid } from "@mui/material";
import React from "react";
import { UseFieldArrayRemove } from "react-hook-form";
import TextField from "../../../common/form/TextField";

interface EssentialItemProps {
    index: number;
    remove: UseFieldArrayRemove;
}

const EssentialItem: React.FC<EssentialItemProps> = ({ index, remove }) => {
    return (
        <Grid container direction="row" columnGap={2} alignItems="center">
            <TextField
                name={`essential_item.${index}.name`}
                label={`Essential Item ${index + 1}`}
            />
            <Button
                onClick={() => remove(index)}
                variant="contained"
                color="error"
            >
                Remove
            </Button>
        </Grid>
    );
};

export default EssentialItem;
