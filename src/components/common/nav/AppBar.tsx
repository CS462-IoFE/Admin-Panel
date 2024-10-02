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
                        <Typography onClick={() => navigate("/")}>
                            Calendar
                        </Typography>

                        <Typography onClick={() => navigate("/event")}>
                            Events
                        </Typography>
                        <Typography onClick={() => navigate("/reports")}>
                            Reports
                        </Typography>
                    </Grid>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
};

export default AppBar;
