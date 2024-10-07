import React from "react";
import { Location } from "../../../../types/event";
import { Grid, Typography } from "@mui/material";
import {
    AccessibleRounded,
    AlarmRounded,
    CalendarMonthRounded,
    GroupsRounded,
    LocationOnRounded,
} from "@mui/icons-material";
import { Map, Marker } from "@vis.gl/react-google-maps";

interface EventDetailsDisplayProps {
    name_en: string;
    name_cn: string;
    date: string;
    start_time: string;
    end_time: string;
    location: Location;
    meeting_location: string;
    accessibility: boolean;
}

const EventDetailsDisplay: React.FC<EventDetailsDisplayProps> = ({
    name_cn,
    name_en,
    date,
    start_time,
    end_time,
    location,
    meeting_location,
    accessibility,
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
                        {name_en}
                    </Typography>
                    <Typography variant="h6">{name_cn}</Typography>
                    {[
                        {
                            icon: <CalendarMonthRounded />,
                            str: `Event Date: ${date}`,
                        },
                        {
                            icon: <AlarmRounded />,
                            str: `Event Period: ${start_time} - ${end_time}`,
                        },
                        {
                            icon: <GroupsRounded />,
                            str: `Meeting Location: ${meeting_location}`,
                        },
                        {
                            icon: <LocationOnRounded />,
                            str: `Event Location: ${location.name}`,
                        },
                        {
                            icon: <AccessibleRounded />,
                            str: `Wheelchair ${
                                accessibility ? "Accessible" : "Inaccessible"
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
                    center={{ lat: location.lat, lng: location.lon }}
                >
                    <Marker
                        position={{ lat: location.lat, lng: location.lon }}
                    />
                </Map>
            </Grid>
        </Grid>
    );
};

export default EventDetailsDisplay;
