import { createBrowserRouter } from "react-router-dom";
import Calendar from "../pages/event/Calendar";
import EventListing from "../pages/event/EventListing";
import EventDetails from "../pages/event/EventDetails";
import AddEvent from "../pages/event/AddEvent";
import EditEvent from "../pages/event/EditEvent";
import Reports from "../pages/Reports";
import RootLayout from "../pages/RootLayout";
import UserListing from "../pages/user/UserListing";
import UserDetails from "../pages/user/UserDetails";

export default createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "", element: <Calendar /> },
            { path: "/event", element: <EventListing /> },
            { path: "/event/:id", element: <EventDetails /> },
            { path: "/event/add", element: <AddEvent /> },
            { path: "/event/:id/edit", element: <EditEvent /> },
            { path: "/reports", element: <Reports /> },
            { path: "/user", element: <UserListing /> },
            { path: "/user/:id", element: <UserDetails /> },
        ],
    },
]);
