import { Button, Grid } from "@mui/material";
import React from "react";
import { UseFieldArrayRemove } from "react-hook-form";
import MapField from "../../../common/form/MapField";

interface MeetingLocationItemProps {
    index: number;
    remove: UseFieldArrayRemove;
}

const MeetingLocationItem: React.FC<MeetingLocationItemProps> = ({
    index,
    remove,
}) => {
    return (
        <Grid container direction="row" columnGap={2} alignItems="center">
            <MapField
                name={`meeting_locations.${index}`}
                label={`Meeting Location ${index + 1}`}
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

export default MeetingLocationItem;
