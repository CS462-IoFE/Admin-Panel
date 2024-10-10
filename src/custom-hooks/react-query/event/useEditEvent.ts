import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { EditEventFormI } from "../../../zod-schema/editEventSchema";
import { editEvent } from "../../../axios/event";
import { enqueueSnackbar } from "notistack";

const useEditEvent = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();

    return useMutation({
        mutationFn: async (data: EditEventFormI) =>
            await editEvent(data, id || ""),
        onSuccess: (data) => {
            enqueueSnackbar(data, { variant: "success" });
            queryClient.invalidateQueries({ queryKey: ["event", "listing"] });
            queryClient.invalidateQueries({
                queryKey: ["event", "detail", id],
            });
        },
        onError(error) {
            enqueueSnackbar(error.message, { variant: "error" });
        },
    });
};

export default useEditEvent;
