import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { addEvent } from "../../../axios/event";
import { AddEventFormI } from "../../../zod-schema/addEventSchema";
import { useNavigate } from "react-router-dom";

const useAddEvent = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async (data: AddEventFormI) => await addEvent(data),
        onSuccess: (data) => {
            enqueueSnackbar(data, { variant: "success" });
            queryClient.invalidateQueries({ queryKey: ["event", "listing"] });
            navigate("/event");
        },
        onError(error) {
            enqueueSnackbar(error.message, { variant: "error" });
        },
    });
};

export default useAddEvent;
