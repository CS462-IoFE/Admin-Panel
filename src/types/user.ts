import { Location } from "./event";

export interface UserListingItem {
    id: string;
    name: string;
    created_at: string;
    email: string;
    role: string;
    beacon?: string;
}

export interface AttendedEventListingItem {
    _id: string;
    event_name: string;
    event_date: string;
    start_time: string;
    event_location: Location;
    end_time: string;
}

export interface UserDetails {
    id: string;
    name: string;
    date: string;
    attended_events: AttendedEventListingItem[];
    remarks: Remark[];
    user: { beacon: string };
}

export interface Remark {
    date: string;
    text: string;
}

export interface RemarkPayload {
    email: string;
    remark: string;
}
