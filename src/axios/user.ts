import { UserListingItem } from "../types/user";
import { userInstance } from "./client";

export const getUsers = async () => {
    const { data } = await userInstance.get("/getUsers");
    return data.data as UserListingItem[];
};
