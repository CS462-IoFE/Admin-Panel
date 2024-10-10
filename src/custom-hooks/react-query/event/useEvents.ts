import { useQuery } from "@tanstack/react-query";
import { getPastEvents, getUpcomingEvents } from "../../../axios/event";

const useEvents = (isUpcoming: boolean) => {
    return useQuery({
        queryKey: ["event", "listing", isUpcoming],
        queryFn: async () =>
            isUpcoming ? await getUpcomingEvents() : await getPastEvents(),
    });
};

export default useEvents;
