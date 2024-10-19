import { useQuery } from "@tanstack/react-query";
import {
    getAverageHoursPerClientForPastSixMonths,
    getCumulativeEngagementsForPastSixMonth,
    getPastSixMonthActivityCount,
    getPastSixMonthsTotalEventHours,
    getUniqueEngagementsForPastSixMonth,
} from "../../../axios/report";

const useReports = () => {
    const { data: activityCountData } = useQuery({
        queryKey: ["report", "getPastSixMonthActivityCount"],
        queryFn: getPastSixMonthActivityCount,
    });

    const { data: totalHoursData } = useQuery({
        queryKey: ["report", "getPastSixMonthsTotalEventHours"],
        queryFn: getPastSixMonthsTotalEventHours,
    });

    const { data: cumulativeEngagementsData } = useQuery({
        queryKey: ["report", "getCumulativeEngagementsForPastSixMonth"],
        queryFn: getCumulativeEngagementsForPastSixMonth,
    });

    const { data: uniqueEngagementData } = useQuery({
        queryKey: ["report", "getUniqueEngagementsForPastSixMonth"],
        queryFn: getUniqueEngagementsForPastSixMonth,
    });

    const { data: averageHoursPerClientData } = useQuery({
        queryKey: ["report", "getAverageHoursPerClientForPastSixMonths"],
        queryFn: getAverageHoursPerClientForPastSixMonths,
    });

    return {
        activityCountData,
        totalHoursData,
        cumulativeEngagementsData,
        uniqueEngagementData,
        averageHoursPerClientData,
    };
};

export default useReports;
