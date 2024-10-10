import {
    AccessibleRounded,
    AlarmRounded,
    CalendarMonthRounded,
    GroupsRounded,
    LocationOnRounded,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Map, Marker } from "@vis.gl/react-google-maps";
import React from "react";
import { EventDetails } from "../../../../types/event";

interface EventDetailsDisplayProps extends EventDetails {}

const EventDetailsDisplay: React.FC<EventDetailsDisplayProps> = ({
    event_name,
    event_name_cn,
    event_date,
    start_time,
    end_time,
    event_location,
    final_meeting_location,
    wheelchair_accessible,
}) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
        >
            <Grid item>
                <Grid container direction="column">
                    <Typography variant="h5" fontWeight={700}>
                        {event_name}
                    </Typography>
                    <Typography variant="h6">{event_name_cn}</Typography>
                    {[
                        {
                            icon: <CalendarMonthRounded />,
                            str: `Event Date: ${event_date}`,
                        },
                        {
                            icon: <AlarmRounded />,
                            str: `Event Period: ${start_time} - ${end_time}`,
                        },
                        {
                            icon: <GroupsRounded />,
                            str: `Meeting Location: ${
                                final_meeting_location?.name ?? "Undecided"
                            }`,
                        },
                        {
                            icon: <LocationOnRounded />,
                            str: `Event Location: ${event_location.name}`,
                        },
                        {
                            icon: <AccessibleRounded />,
                            str: `Wheelchair ${
                                wheelchair_accessible
                                    ? "Accessible"
                                    : "Inaccessible"
                            }`,
                        },
                    ].map(({ icon, str }) => (
                        <Grid
                            key={str}
                            container
                            direction="row"
                            alignItems="center"
                            gap={2}
                        >
                            {icon}
                            <Typography variant="subtitle1">{str}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item width={480} height={280}>
                <Map
                    defaultZoom={15}
                    center={{
                        lat: event_location.lat,
                        lng: event_location.lon,
                    }}
                >
                    <Marker
                        position={{
                            lat: event_location.lat,
                            lng: event_location.lon,
                        }}
                    />
                </Map>
            </Grid>
        </Grid>
    );
};

export default EventDetailsDisplay;
