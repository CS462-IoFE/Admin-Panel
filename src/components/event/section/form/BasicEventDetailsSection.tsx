import { Grid } from "@mui/material";
import React from "react";
import CheckBox from "../../../common/form/Checkbox";
import DatePicker from "../../../common/form/DatePicker";
import MapField from "../../../common/form/MapField";
import TextField from "../../../common/form/TextField";
import TimePicker from "../../../common/form/TimePicker";

interface BasicEventDetailsSectionProps {}

const BasicEventDetailsSection: React.FC<
    BasicEventDetailsSectionProps
> = ({}) => {
    return (
        <Grid container direction="column" mb={4} rowGap={2}>
            <Grid container direction="row" columnGap={2}>
                <TextField name="name_en" label="Event Name (EN)" />
                <TextField name="name_cn" label="Event Name (CN)" />
                <DatePicker name="date" label="Event Date" />
            </Grid>
            <Grid container direction="row" columnGap={2} alignItems="center">
                <TimePicker name="start_time" label="Start Time" />
                <TimePicker name="end_time" label="End Time" />
                <CheckBox name="accessibility" label="Wheelchair Accessible?" />
            </Grid>
            <Grid item>
                <TextField
                    name="description"
                    label="Description"
                    multiline
                    rows={4}
                    sx={{ width: 650 }}
                />
            </Grid>
            <MapField name="location" label="Event Location & Address" />
        </Grid>
    );
};

export default BasicEventDetailsSection;
