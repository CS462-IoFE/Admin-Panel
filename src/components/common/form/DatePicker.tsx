import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { TextFieldVariants } from "@mui/material";

interface DatePickerProps {
    variant?: TextFieldVariants;
    name: string;
    label: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, label, variant }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MUIDatePicker
                        {...field}
                        disablePast
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

export default DatePicker;
