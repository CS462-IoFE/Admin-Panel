import { useQuery } from "@tanstack/react-query";
import { getEventDetailsById } from "../../../axios/event";

const useEventById = (id?: string) => {
    return useQuery({
        queryKey: ["event", "details", id],
        queryFn: async () => await getEventDetailsById(id ?? ""),
        enabled: !!id,
    });
};

export default useEventById;
