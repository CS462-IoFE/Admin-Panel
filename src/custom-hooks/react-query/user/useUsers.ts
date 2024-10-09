import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../axios/user";

const useUsers = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: getUsers,
    });
};

export default useUsers;
