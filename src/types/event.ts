export interface EventListingItem {
    _id: string;
    event_name: string;
    event_date: string;
    event_location: Location;
    start_time: string;
    end_time: string;
}

export interface EventDetails {
    event_name: string;
    event_name_cn: string;
    event_date: string;
    start_time: string;
    end_time: string;
    event_location: Location;
    meeting_location: Location[];
    final_meeting_location?: Location;
    wheelchair_accessible: boolean;
    participants: AttendeeListItem[];
    staff: string[];
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
