import { Grid, Typography } from "@mui/material";
import React from "react";
import SingleSelectField from "../../common/form/SingleSelectField";
import EventFilterSwitch from "../form/EventFilterSwitch";

interface EventListingActionsProps {}

const EventListingActions: React.FC<EventListingActionsProps> = ({}) => {
    return (
        <Grid container direction="row" gap={4} alignItems="center">
            <Grid item>
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
                    ]}
                />
            </Grid>
            <Grid item>
                <Grid container direction="row" gap={2} alignItems="center">
                    <Typography>Past or Current Events</Typography>
                    <EventFilterSwitch />
                    <Typography>Upcoming Events</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EventListingActions;
