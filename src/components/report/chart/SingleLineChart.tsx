import { Typography, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";
import getPastSixMonths from "../../../helper-functions/getPastSixMonths";

interface SingleLineChartProps {
    dataset: number[];
    type: "activities-count" | "total-hours" | "average-hours";
}

const SingleLineChart: React.FC<SingleLineChartProps> = ({ type, dataset }) => {
    const { palette } = useTheme();

    return (
        <>
            <Typography variant="h6" textAlign="center">
                {type === "activities-count"
                    ? "No. of Activities"
                    : type === "total-hours"
                    ? "Total Hours"
                    : "Average Hours Per Client"}
            </Typography>
            <LineChart
                height={300}
                xAxis={[{ scaleType: "point", data: getPastSixMonths() }]}
                series={[
                    {
                        color: palette.primary.main,
                        data: dataset,
                        label:
                            type === "activities-count"
                                ? "No. of activities"
                                : "No of hours",
                    },
                ]}
            />
        </>
    );
};

export default SingleLineChart;
