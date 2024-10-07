export interface EventListingItem {
    id: string;
    name: string;
    date: string;
    location: string;
    start_time: string;
    end_time: string;
}

export interface EventDetails {
    name_en: string;
    name_cn: string;
    date: string;
    start_time: string;
    end_time: string;
    location: Location;
    meeting_location: string;
    accessibility: boolean;
    attendee_list: AttendeeListItem[];
    staff_list: string[];
}

export interface Location {
    formatted_address: string;
    lat: number;
    lon: number;
    name: string;
}

export interface AttendeeListItem {
    name: string;
    status: string;
    reason?: string;
}
