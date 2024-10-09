import { EventListingItem } from "./event";

export interface UserListingItem {
    id: string;
    name: string;
    created_at: string;
    role: string;
}

export interface UserDetails {
    id: string;
    name: string;
    date: string;
    attended_events: EventListingItem[];
    remarks: Remark[];
}

export interface Remark {
    id: string;
    date: string;
    text: string;
}
