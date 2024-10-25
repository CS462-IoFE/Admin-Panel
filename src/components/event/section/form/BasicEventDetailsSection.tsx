import { Grid } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { getTranslation } from "../../../../axios/google";
import { AddEventFormI } from "../../../../zod-schema/addEventSchema";
import { EditEventFormI } from "../../../../zod-schema/editEventSchema";
import CheckBox from "../../../common/form/Checkbox";
import DatePicker from "../../../common/form/DatePicker";
import MapField from "../../../common/form/MapField";
import TextField from "../../../common/form/TextField";
import TimePicker from "../../../common/form/TimePicker";

interface BasicEventDetailsSectionProps {}

const BasicEventDetailsSection: React.FC<
    BasicEventDetailsSectionProps
> = ({}) => {
    const { getValues, setValue } = useFormContext<
        AddEventFormI | EditEventFormI
    >();

    return (
        <Grid container direction="column" mb={4} rowGap={2}>
            <Grid container direction="row" columnGap={2}>
                <TextField
                    name="name_en"
                    label="Event Name (EN)"
                    onBlurCapture={async () =>
                        setValue(
                            "name_cn",
                            await getTranslation(getValues("name_en"))
                        )
                    }
                />
                <TextField name="name_cn" label="Event Name (CN)" />
                <TextField name="participant_limit" label="Participant Limit" />
                <CheckBox name="accessibility" label="Wheelchair Accessible?" />
            </Grid>
            <Grid container direction="row" columnGap={2} alignItems="center">
                <DatePicker name="date" label="Event Date" />
                <TimePicker name="start_time" label="Start Time" />
                <TimePicker name="end_time" label="End Time" />
            </Grid>
            <Grid item>
                <TextField
                    onBlurCapture={async () =>
                        setValue(
                            "description_cn",
                            await getTranslation(getValues("description"))
                        )
                    }
                    name="description"
                    label="Description (EN)"
                    multiline
                    rows={4}
                    sx={{ width: 650 }}
                />
            </Grid>
            <Grid item>
                <TextField
                    name="description_cn"
                    label="Description (CN)"
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
