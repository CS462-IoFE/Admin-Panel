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
import DeleteUserDialog from "../dialog/DeleteUserDialog";
import { UserFilterI } from "../../../zod-schema/userFilterSchema";
import useUsers from "../../../custom-hooks/react-query/user/useUsers";

interface UserListingTableProps {}

const UserListingTable: React.FC<UserListingTableProps> = ({}) => {
    const { watch } = useFormContext<UserFilterI>();
    const [sort] = watch(["sort"]);
    const navigate = useNavigate();
    const { data: users } = useUsers();

    return (
        <TableContainer component={Box}>
            <Table sx={{ minWidth: 800 }}>
                <TableHead>
                    <TableRow component="th">
                        {["User Name", "Join Date", "Role", "Actions"].map(
                            (str) => (
                                <TableCell sx={{ fontWeight: 600 }} key={str}>
                                    {str}
                                </TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users &&
                        users
                            .map((row) => ({
                                ...row,
                                date: dayjs(row.created_at),
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
                            .map(({ id, name, date, role, email }) => (
                                <TableRow
                                    key={id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    {[
                                        name,
                                        date.format("D MMM YYYY"),
                                        role,
                                    ].map((it, index) => (
                                        <TableCell key={`${id}-${index}`}>
                                            {it}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Button
                                            sx={{ mr: 2 }}
                                            variant="contained"
                                            color="primary"
                                            onClick={() =>
                                                navigate(`/user/${email}`)
                                            }
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
