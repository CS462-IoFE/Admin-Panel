import { useQuery } from "@tanstack/react-query";
import { getAttendedEventByEmail } from "../../../axios/participant";

const useParticipantByEmail = (email?: string) => {
    return useQuery({
        queryKey: ["participant", "details", email],
        queryFn: ({ queryKey }) => getAttendedEventByEmail(queryKey[2] ?? ""),
        enabled: !!email,
    });
};

export default useParticipantByEmail;
