import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "../../common/form/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { Remark } from "../../../types/user";

interface RemarksSectionProps {
    remarks: Remark[];
}

const RemarksSection: React.FC<RemarksSectionProps> = ({ remarks }) => {
    const formState = useForm();
    const { handleSubmit, setValue } = formState;

    return (
        <FormProvider {...formState}>
            <Typography my={2} variant="h6" fontWeight={600}>
                Remarks
            </Typography>
            <Grid container direction="column" gap={2}>
                <TextField label="Remark" name="remark" multiline rows={4} />
                <Grid item>
                    <Button
                        onClick={handleSubmit((data) => {
                            setValue("remark", "");
                            console.log(data);
                        })}
                        color="primary"
                        variant="contained"
                    >
                        Add New Remark
                    </Button>
                </Grid>
                <Grid mt={3} container direction="column" gap={3}>
                    {remarks.map(({ id, date, text }) => (
                        <Grid key={id} container direction="column">
                            <Typography variant="subtitle2" fontWeight={700}>
                                {date}
                            </Typography>
                            <Typography>{text}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default RemarksSection;
