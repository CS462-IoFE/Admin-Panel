export interface EngagementCountItem {
    month: string;
    client_count: number;
    volunteer_count: number;
}

export interface AverageHoursPerClientCountItem extends EngagementCountItem {
    average_hours_per_client: number;
}
