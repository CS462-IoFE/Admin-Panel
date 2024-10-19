import { AverageHoursPerClientCountItem, EngagementCountItem } from "../types/report";
import { reportInstance } from "./client";

export const getPastSixMonthActivityCount = async () => {
    const { data } = await reportInstance.get("/getPastSixMonthActivityCount");

    return data.monthlyCounts as number[];
};

export const getPastSixMonthsTotalEventHours = async () => {
    const { data } = await reportInstance.get(
        "/getPastSixMonthsTotalEventHours"
    );

    return data.totalHours as number[];
};

export const getCumulativeEngagementsForPastSixMonth = async () => {
    const { data } = await reportInstance.get("/getCumulativeEngagementsForPastSixMonth");

    return data.data as EngagementCountItem[];
};

export const getUniqueEngagementsForPastSixMonth = async () => {
    const { data } = await reportInstance.get("/getUniqueEngagementsForPastSixMonth");

    return data.data as EngagementCountItem[];
};

export const getAverageHoursPerClientForPastSixMonths = async () => {
    const { data } = await reportInstance.get("/getAverageHoursPerClientForPastSixMonths");

    return data.data as AverageHoursPerClientCountItem[];
};

