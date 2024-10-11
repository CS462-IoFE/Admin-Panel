import {
    Box,
    Toolbar,
    Typography,
    Grid,
    AppBar as MuiAppBar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = ({}) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MuiAppBar position="static">
                <Toolbar>
                    <Typography
                        onClick={() => navigate("/")}
                        variant="h6"
                        component="div"
                        flexGrow={1}
                        minWidth={150}
                        sx={{ cursor: "pointer" }}
                    >
                        MINDS Together
                    </Typography>
                    <Grid
                        container
                        justifyContent="end"
                        alignItems="center"
                        gap={3}
                    >
                        {[
                            { to: "/", name: "Calendar" },
                            { to: "/event", name: "Events" },
                            { to: "/reports", name: "Reports" },
                            { to: "/user", name: "Users" },
                        ].map(({ to, name }) => (
                            <Box
                                key={name}
                                onClick={() => navigate(to)}
                                sx={{
                                    cursor: "pointer",
                                    padding: "10px 15px", // Add padding to create box effect
                                    borderRadius: "4px", // Rounded corners
                                    backgroundColor: "transparent", // Default background color
                                    "&:hover": {
                                        backgroundColor: "#d0d0d0", 
                                        color: "black", // Change text color on hover
                                        textDecoration: "underline", // Add underline on hover
                                    },
                                }}
                            >
                                <Typography>{name}</Typography>
                            </Box>
                        ))}
                    </Grid>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
};

export default AppBar;
