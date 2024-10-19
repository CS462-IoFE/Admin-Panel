import { useCallback, useMemo } from "react";
import { EventListingItem } from "../../types/event";
import { EventInput } from "@fullcalendar/core/index.js";
import dayjs from "dayjs";
import { useTheme } from "@mui/material";

const useCalendarEvent = (
    pastEvents: EventListingItem[],
    upcomingEvents: EventListingItem[]
) => {
    const { palette } = useTheme();

    const processEvent = useCallback(
        (
            { event_name, event_date, _id }: EventListingItem,
            isUpcoming: boolean
        ) =>
            ({
                id: _id,
                title: event_name,
                date: dayjs(event_date).format("YYYY-MM-DD"),
                color: palette[isUpcoming ? "primary" : "secondary"].main,
            } as EventInput),
        []
    );

    return useMemo(() => {
        const processedPastEvents = pastEvents.map((event) =>
            processEvent(event, false)
        );

        const processedUpcomingEvents = upcomingEvents.map((event) =>
            processEvent(event, true)
        );

        return [...processedPastEvents, ...processedUpcomingEvents];
    }, [pastEvents, upcomingEvents]);
};

export default useCalendarEvent;
