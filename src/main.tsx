import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import queryClient from "./config/query-client.ts";
import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import router from "./config/router.tsx";
import defaultTheme from "./config/theme.ts";
import { APIProvider } from "@vis.gl/react-google-maps";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
            <ThemeProvider theme={defaultTheme}>
                <QueryClientProvider client={queryClient}>
                    <SnackbarProvider>
                        <CssBaseline />
                        <RouterProvider router={router} />
                    </SnackbarProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </APIProvider>
    </React.StrictMode>
);
