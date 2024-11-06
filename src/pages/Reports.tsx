import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import TwinBarChart from "../components/report/chart/TwinBarChart";
import SingleLineChart from "../components/report/chart/SingleLineChart";
import useReports from "../custom-hooks/react-query/report/useReports";

interface ReportsProps {}

const Reports: React.FC<ReportsProps> = ({}) => {
    const {
        activityCountData,
        totalHoursData,
        cumulativeEngagementsData,
        uniqueEngagementData,
        averageHoursPerClientData,
    } = useReports();

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                Reports
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <TwinBarChart
                        dataset={
                            cumulativeEngagementsData
                                ? cumulativeEngagementsData.map((it) => ({
                                      client: it.client_count,
                                      caregiver: it.caregiver_count,
                                  }))
                                : []
                        }
                        type="cumulative"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TwinBarChart
                        dataset={
                            uniqueEngagementData
                                ? uniqueEngagementData.map((it) => ({
                                      client: it.client_count,
                                      caregiver: it.caregiver_count,
                                  }))
                                : []
                        }
                        type="unique"
                    />
                </Grid>
                <Grid item xs={6}>
                    <SingleLineChart
                        dataset={activityCountData ?? []}
                        type="activities-count"
                    />
                </Grid>
                <Grid item xs={6}>
                    <SingleLineChart
                        dataset={totalHoursData ?? []}
                        type="total-hours"
                    />
                </Grid>
                <Grid item xs={6}>
                    <SingleLineChart
                        dataset={
                            averageHoursPerClientData
                                ? averageHoursPerClientData.map(
                                      (it) => it.average_hours_per_client
                                  )
                                : []
                        }
                        type="average-hours"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Reports;
