import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent } from "../../../axios/event";
import { enqueueSnackbar } from "notistack";

const useDeleteEvent = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => deleteEvent(id),
        onSuccess: (data) => {
            enqueueSnackbar(data, { variant: "success" });
            queryClient.invalidateQueries({ queryKey: ["event"] });
        },
        onError(error) {
            enqueueSnackbar(error.message, { variant: "error" });
        },
    });
};

export default useDeleteEvent;
