import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import useAddRemark from "../../../custom-hooks/react-query/user/useAddRemark";
import { Remark } from "../../../types/user";
import {
    AddRemarkFormI,
    addRemarkSchema,
} from "../../../zod-schema/addRemarkSchema";
import TextField from "../../common/form/TextField";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

interface RemarksSectionProps {
    remarks: Remark[];
}

const RemarksSection: React.FC<RemarksSectionProps> = ({ remarks }) => {
    const formState = useForm<AddRemarkFormI>({
        resolver: zodResolver(addRemarkSchema),
    });
    const { handleSubmit, reset } = formState;
    const { email } = useParams();
    const { mutate } = useAddRemark();

    return (
        <FormProvider {...formState}>
            <Typography my={2} variant="h6" fontWeight={600}>
                Remarks
            </Typography>
            <Grid container direction="column" gap={2}>
                <TextField label="Remark" name="remark" multiline rows={4} />
                <Grid item>
                    <Button
                        onClick={handleSubmit(({ remark }) => {
                            reset();
                            if (!email) {
                                enqueueSnackbar(
                                    "User does not exists in page",
                                    { variant: "error" }
                                );
                            }

                            mutate({
                                remark,
                                email: email ?? "",
                            });
                        })}
                        color="primary"
                        variant="contained"
                    >
                        Add New Remark
                    </Button>
                </Grid>
                <Grid mt={3} container direction="column" gap={3}>
                    {remarks.map(({ date, text }, index) => (
                        <Grid key={index} container direction="column">
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
