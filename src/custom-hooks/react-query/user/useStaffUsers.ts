import { useQuery } from "@tanstack/react-query";
import { getStaffs } from "../../../axios/user";

const useStaffUsers = () => {
    return useQuery({
        queryKey: ["user", "listing", "staffs"],
        queryFn: getStaffs,
    });
};

export default useStaffUsers;
