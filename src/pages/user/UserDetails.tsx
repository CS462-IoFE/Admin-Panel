import { Container, Typography, Grid, Divider, Button } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserAttendedListingTable from "../../components/user/table/UserAttendedListingTable";
import RemarksSection from "../../components/user/section/RemarksSection";
import useParticipantByEmail from "../../custom-hooks/react-query/participant/useParticipantByEmail";

interface UserDetailsProps {}

const UserDetails: React.FC<UserDetailsProps> = ({}) => {
    const navigate = useNavigate();
    const { email } = useParams();
    const { data: user } = useParticipantByEmail(email);

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                User Details
            </Typography>
            {user && (
                <Grid container direction="column">
                    <Typography>{`Name: ${user.name}`}</Typography>
                    <Typography>{`Join Date: ${user.date}`}</Typography>
                    <Typography>{`Beacon: ${user?.user?.beacon}`}</Typography>
                    <UserAttendedListingTable events={user.attended_events} />
                    <RemarksSection remarks={user.remarks} />
                    <Divider sx={{ my: 2 }} />
                    <Grid item>
                        <Button
                            sx={{ float: "right" }}
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate("/user")}
                        >
                            Back to User Listing
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default UserDetails;
