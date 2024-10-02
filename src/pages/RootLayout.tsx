import React from "react";
import AppBar from "../components/common/nav/AppBar";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    );
};

export default RootLayout;
