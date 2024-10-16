import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRemark } from "../../../axios/user";
import { enqueueSnackbar } from "notistack";

const useAddRemark = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addRemark,
        onSuccess: (data, vars) => {
            enqueueSnackbar(data, { variant: "success" });
            queryClient.invalidateQueries({
                queryKey: ["participant", "details", vars.email],
            });
        },
        onError(error) {
            enqueueSnackbar(error.message, { variant: "error" });
        },
    });
};

export default useAddRemark;
