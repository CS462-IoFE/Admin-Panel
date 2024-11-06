export interface EngagementCountItem {
    month: string;
    client_count: number;
    caregiver_count: number;
}

export interface AverageHoursPerClientCountItem extends EngagementCountItem {
    average_hours_per_client: number;
}
