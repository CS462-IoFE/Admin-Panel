import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import TwinBarChart from "../components/report/chart/TwinBarChart";
import SingleLineChart from "../components/report/chart/SingleLineChart";

interface ReportsProps {}

const dataset = [
    {
        client: 50,
        volunteer: 10,
    },
    {
        client: 60,
        volunteer: 8,
    },
    {
        client: 70,
        volunteer: 12,
    },
    {
        client: 65,
        volunteer: 11,
    },
    {
        client: 60,
        volunteer: 8,
    },
    {
        client: 62,
        volunteer: 14,
    },
];

const Reports: React.FC<ReportsProps> = ({}) => {
    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                Reports
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <TwinBarChart dataset={dataset} type="cumulative" />
                </Grid>
                <Grid item xs={6}>
                    <TwinBarChart dataset={dataset} type="unique" />
                </Grid>
                <Grid item xs={6}>
                    <SingleLineChart
                        dataset={[20, 25, 30, 35, 40, 45]}
                        type="activities-count"
                    />
                </Grid>
                <Grid item xs={6}>
                    <SingleLineChart
                        dataset={[20, 25, 30, 35, 40, 45]}
                        type="total-hours"
                    />
                </Grid>
                <Grid item xs={6}>
                    <SingleLineChart
                        dataset={[20, 25, 30, 35, 40, 45]}
                        type="average-hours"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Reports;
