import {
    Box,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface SelectOption {
    label: string;
    value: string;
}

interface SingleSelectFieldProps {
    name: string;
    label: string;
    emptySelectionStr?: string;
    options: SelectOption[];
}

const SingleSelectField: React.FC<SingleSelectFieldProps> = ({
    name,
    label,
    emptySelectionStr,
    options,
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            defaultValue=""
            name={name}
            render={({ field, fieldState }) => (
                <Box sx={{ minWidth: 240 }}>
                    <FormControl error={!!fieldState.error} fullWidth>
                        <InputLabel>{label}</InputLabel>
                        <Select {...field} label={label}>
                            {emptySelectionStr && (
                                <MenuItem value="">
                                    {emptySelectionStr}
                                </MenuItem>
                            )}
                            {options.map(({ label, value }) => (
                                <MenuItem key={value} value={value}>
                                    <Typography>{label}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                        {fieldState.error && fieldState.error.message && (
                            <FormHelperText>
                                {fieldState.error.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Box>
            )}
        />
    );
};

export default SingleSelectField;
