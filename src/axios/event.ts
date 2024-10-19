import { EventDetails, EventListingItem } from "../types/event";
import { AddEventFormI } from "../zod-schema/addEventSchema";
import { EditEventFormI } from "../zod-schema/editEventSchema";
import { eventInstance } from "./client";

export const getPastEvents = async () => {
    const { data } = await eventInstance.get("/getPastEvents");
    return data.data as EventListingItem[];
};

export const getUpcomingEvents = async () => {
    const { data } = await eventInstance.get("/getUpcomingEvents");
    return data.data as EventListingItem[];
};

export const getEventDetailsById = async (id: string) => {
    const { data } = await eventInstance.get(
        `/getEventByIdWithParticipants/${id}`
    );
    return { ...data.event, participants: data.participants } as EventDetails;
};

export const addEvent = async ({
    start_time,
    end_time,
    accessibility,
    location,
    meeting_locations,
    name_cn,
    name_en,
    staff_present,
    date,
    description,
    description_cn,
}: AddEventFormI) => {
    const payload = {
        event_name: name_en,
        event_name_cn: name_cn,
        event_date: date.format("YYYY-MM-DD"),
        start_time: start_time.format("HHmm"),
        end_time: end_time.format("HHmm"),
        event_location: location,
        meeting_location: meeting_locations,
        description: description,
        description_cn: description_cn,
        wheelchair_accessible: accessibility,
        staff: staff_present.map(({ name }) => name),
    };

    const { data } = await eventInstance.post("/create", payload);
    return data.message as string;
};

export const editEvent = async (
    {
        start_time,
        end_time,
        accessibility,
        location,
        name_cn,
        name_en,
        staff_present,
        date,
        description,
        description_cn,
    }: EditEventFormI,
    id: string
) => {
    if (id === "") return "Event id incorrect, please refresh this page!";

    const payload = {
        event_name: name_en,
        event_name_cn: name_cn,
        event_date: date.format("YYYY-MM-DD"),
        start_time: start_time.format("HHmm"),
        end_time: end_time.format("HHmm"),
        event_location: location,
        description: description,
        description_cn: description_cn,
        wheelchair_accessible: accessibility,
        staff: staff_present.map(({ name }) => name),
    };

    const { data } = await eventInstance.patch(`/${id}`, payload);
    return data.message as string;
};

export const deleteEvent = async (id: string) => {
    const { data } = await eventInstance.delete(`/${id}`);
    return data.message as string;
};
