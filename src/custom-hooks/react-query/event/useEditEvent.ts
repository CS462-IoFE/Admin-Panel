import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { EditEventFormI } from "../../../zod-schema/editEventSchema";
import { editEvent } from "../../../axios/event";
import { enqueueSnackbar } from "notistack";

const useEditEvent = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (data: EditEventFormI) =>
            await editEvent(data, id || ""),
        onSuccess: (data) => {
            enqueueSnackbar(data, { variant: "success" });
            queryClient.invalidateQueries({ queryKey: ["event", "listing"] });
            queryClient.invalidateQueries({
                queryKey: ["event", "detail", id],
            });
            navigate("/event")
        },
        onError(error) {
            enqueueSnackbar(error.message, { variant: "error" });
        },
    });
};

export default useEditEvent;
