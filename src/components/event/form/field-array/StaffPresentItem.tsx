import { Button, Grid } from "@mui/material";
import React from "react";
import SingleSelectField from "../../../common/form/SingleSelectField";
import { UseFieldArrayRemove } from "react-hook-form";
import useStaffUsers from "../../../../custom-hooks/react-query/user/useStaffUsers";

interface StaffPresentItemProps {
    index: number;
    remove: UseFieldArrayRemove;
}

const StaffPresentItem: React.FC<StaffPresentItemProps> = ({
    index,
    remove,
}) => {
    const { data: staffs } = useStaffUsers();

    return (
        <Grid container direction="row" columnGap={2} alignItems="center">
            <SingleSelectField
                name={`staff_present.${index}.name`}
                label={`Staff ${index + 1}`}
                options={
                    staffs?.map(({ name }) => ({
                        label: name,
                        value: name,
                    })) ?? []
                }
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

export default StaffPresentItem;
