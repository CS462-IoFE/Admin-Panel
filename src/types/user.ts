import { EventListingItem } from "./event";

export interface UserListingItem {
    id: string;
    name: string;
    date: string;
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
