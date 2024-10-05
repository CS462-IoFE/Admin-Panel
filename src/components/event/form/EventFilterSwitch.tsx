import { Switch } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { EventFilterI } from "../../../zod-schema/eventFilterSchema";

interface EventFilterSwitchProps {}

const EventFilterSwitch: React.FC<EventFilterSwitchProps> = ({}) => {
    const { control } = useFormContext<EventFilterI>();

    return (
        <Controller
            control={control}
            name="is_upcoming"
            render={({ field }) => (
                <Switch
                    checked={field.value}
                    onChange={({ target }) => field.onChange(target.checked)}
                />
            )}
        />
    );
};

export default EventFilterSwitch;
