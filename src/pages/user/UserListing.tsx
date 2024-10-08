import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import SingleSelectField from "../../components/common/form/SingleSelectField";
import UserListingTable from "../../components/user/table/UserListingTable";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFilterSchema } from "../../zod-schema/userFilterSchema";

interface UserListingProps {}

const UserListing: React.FC<UserListingProps> = ({}) => {
    const formState = useForm({
        resolver: zodResolver(userFilterSchema),
        defaultValues: userFilterSchema.parse({
            sort: "name-ascending",
        }),
    });

    return (
        <FormProvider {...formState}>
            <Container maxWidth="xl" sx={{ my: 4 }}>
                <Typography variant="h3" mb={4}>
                    User Listing
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <SingleSelectField
                        name="sort"
                        label="Sort By"
                        options={[
                            {
                                label: "Newest First",
                                value: "date-descending",
                            },
                            {
                                label: "Oldest First",
                                value: "date-ascending",
                            },
                            {
                                label: "A-Z",
                                value: "name-ascending",
                            },
                            {
                                label: "Z-A",
                                value: "name-descending",
                            },
                        ]}
                    />
                </Grid>
                <UserListingTable />
            </Container>
        </FormProvider>
    );
};

export default UserListing;
