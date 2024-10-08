import { Container, Typography, Grid, Divider, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserDetails as UserDetailsI } from "../../types/user";
import UserAttendedListingTable from "../../components/user/table/UserAttendedListingTable";
import RemarksSection from "../../components/user/section/RemarksSection";

interface UserDetailsProps {}

const user: UserDetailsI = {
    id: "1",
    name: "User 1",
    date: "08 Jan 2024",
    attended_events: [
        {
            id: "1",
            name: "Mass Activity - Water Related",
            date: "08 Jan 2024",
            location: "Delta Swimming Complex",
            start_time: "10:00am",
            end_time: "12:00pm",
        },
        {
            id: "2",
            name: "Mass Activity - Water Related",
            date: "08 Feb 2024",
            location: "Delta Swimming Complex",
            start_time: "10:00am",
            end_time: "12:00pm",
        },
        {
            id: "3",
            name: "Mass Activity - Water Related",
            date: "08 Mar 2024",
            location: "Delta Swimming Complex",
            start_time: "10:00am",
            end_time: "12:00pm",
        },
        {
            id: "4",
            name: "Mass Activity - Water Related",
            date: "08 Jan 2024",
            location: "Delta Swimming Complex",
            start_time: "10:00am",
            end_time: "12:00pm",
        },
        {
            id: "5",
            name: "Mass Activity - Water Related",
            date: "08 Jan 2024",
            location: "Delta Swimming Complex",
            start_time: "10:00am",
            end_time: "12:00pm",
        },
    ],
    remarks: [
        {
            id: "1",
            date: "20 Sep 2024",
            text: "This is a remark made by one of the staffs regarding this user",
        },
        {
            id: "2",
            date: "18 Sep 2024",
            text: "This is a remark made by one of the staffs regarding this user",
        },
    ],
};

const UserDetails: React.FC<UserDetailsProps> = ({}) => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography variant="h3" mb={4}>
                User Details
            </Typography>
            <Grid container direction="column">
                <Typography>{`Name: ${user.name}`}</Typography>
                <Typography>{`Join Date: ${user.date}`}</Typography>
                <UserAttendedListingTable events={user.attended_events} />
                <RemarksSection remarks={user.remarks}/>
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
        </Container>
    );
};

export default UserDetails;
