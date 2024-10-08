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
                            <Typography key={name} onClick={() => navigate(to)}>
                                {name}
                            </Typography>
                        ))}
                    </Grid>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
};

export default AppBar;
