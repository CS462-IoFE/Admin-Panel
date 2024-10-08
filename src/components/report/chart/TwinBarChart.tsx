import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { Typography } from "@mui/material";
import React from "react";
import getPastSixMonths from "../../../helper-functions/getPastSixMonths";

interface TwinBarChartProps {
    dataset: Array<{ client: number; volunteer: number }>;
    type: "cumulative" | "unique";
}

const TwinBarChart: React.FC<TwinBarChartProps> = ({ type, dataset }) => {
    const { palette } = useTheme();

    return (
        <>
            <Typography variant="h6" textAlign="center">
                Total {type} engagements
            </Typography>
            <BarChart
                height={300}
                xAxis={[{ scaleType: "band", data: getPastSixMonths() }]}
                dataset={dataset}
                series={[
                    {
                        dataKey: "client",
                        label: "Client",
                        color: palette.secondary.main,
                    },
                    {
                        dataKey: "volunteer",
                        label: "Volunteer",
                        color: palette.primary.main,
                    },
                ]}
            />
        </>
    );
};

export default TwinBarChart;
