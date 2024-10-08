import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserListingItem } from "../../../types/user";
import DeleteUserDialog from "../dialog/DeleteUserDialog";
import { UserFilterI } from "../../../zod-schema/userFilterSchema";

interface UserListingTableProps {}

const rows: UserListingItem[] = [
    {
        id: "0",
        name: "User 0",
        date: "09 Jan 2024",
    },
    {
        id: "1",
        name: "User 1",
        date: "10 Jan 2024",
    },
    {
        id: "2",
        name: "User 2",
        date: "08 Jan 2024",
    },
    {
        id: "3",
        name: "User 3",
        date: "08 Jan 2024",
    },
    {
        id: "4",
        name: "User 4",
        date: "08 Jan 2024",
    },
    {
        id: "5",
        name: "User 5",
        date: "08 Jan 2024",
    },
    {
        id: "6",
        name: "User 6",
        date: "08 Jan 2024",
    },
    {
        id: "7",
        name: "User 7",
        date: "08 Jan 2024",
    },
];

const UserListingTable: React.FC<UserListingTableProps> = ({}) => {
    const { watch } = useFormContext<UserFilterI>();
    const [sort] = watch(["sort"]);
    const navigate = useNavigate();

    return (
        <TableContainer component={Box}>
            <Table sx={{ minWidth: 800 }}>
                <TableHead>
                    <TableRow component="th">
                        {["User Name", "Join Date", "Actions"].map((str) => (
                            <TableCell sx={{ fontWeight: 600 }} key={str}>
                                {str}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .map((row) => ({
                            ...row,
                            date: dayjs(row.date, "DD MM YYYY"),
                        }))
                        .sort((a, b) => {
                            const [method, direction] = sort.split("-");
                            if (method === "date") {
                                return (
                                    direction === "descending"
                                        ? a.date.isBefore(b.date)
                                        : a.date.isAfter(b.date)
                                )
                                    ? 1
                                    : -1;
                            }
                            return direction === "ascending"
                                ? a.name.localeCompare(b.name)
                                : b.name.localeCompare(a.name);
                        })
                        .map(({ id, name, date }) => (
                            <TableRow
                                key={id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                {[name, date.format("DD MMM YYYY")].map(
                                    (it, index) => (
                                        <TableCell key={`${id}-${index}`}>
                                            {it}
                                        </TableCell>
                                    )
                                )}
                                <TableCell>
                                    <Button
                                        sx={{ mr: 2 }}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate(`/user/${id}`)}
                                    >
                                        View
                                    </Button>
                                    <DeleteUserDialog {...{ id, name }} />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserListingTable;
