import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface CheckBoxProps {
    name: string;
    label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormControlLabel
                    control={<Checkbox {...field} />}
                    label={label}
                />
            )}
        />
    );
};

export default CheckBox;
