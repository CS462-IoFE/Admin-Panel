import { Typography } from "@mui/material";
import React from "react";

interface StaffPresentDisplayProps {
    staff_list: string[];
}

const StaffPresentDisplay: React.FC<StaffPresentDisplayProps> = ({
    staff_list,
}) => {
    return (
        <>
            <Typography variant="h6" fontWeight={700}>
                Staff Present
            </Typography>
            <ul>
                {staff_list.map((str) => (
                    <li key={str}>
                        <Typography>{str}</Typography>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default StaffPresentDisplay;
