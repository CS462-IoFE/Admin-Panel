import { UserDetails } from "../types/user";
import { participantInstance } from "./client";

export const getAttendedEventByEmail = async (email: string) => {
    const { data } = await participantInstance.get(
        `/getAttendedEventyEmail/${email}`
    );
    return data.data as UserDetails;
};
