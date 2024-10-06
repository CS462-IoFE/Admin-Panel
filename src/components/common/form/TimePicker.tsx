import { TextFieldVariants } from "@mui/material";
import {
    LocalizationProvider,
    TimePicker as MuiTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TimePickerProps {
    variant?: TextFieldVariants;
    name: string;
    label: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ name, label, variant }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MuiTimePicker
                        {...field}
                        label={label}
                        slotProps={{
                            textField: {
                                variant: variant,
                                helperText: fieldState.error?.message,
                                error: !!fieldState.error,
                            },
                        }}
                    />
                </LocalizationProvider>
            )}
        />
    );
};

export default TimePicker;
