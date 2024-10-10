import dayjs from "dayjs";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { EventDetails } from "../../types/event";
import { EditEventFormI } from "../../zod-schema/editEventSchema";

const usePopulateEventDetailForm = (
    formState: UseFormReturn<EditEventFormI>,
    event?: EventDetails
) => {
    const { setValue, getValues, reset } = formState;

    useEffect(() => {
        if (event) {
            reset()

            const {
                event_name,
                event_name_cn,
                event_location,
                event_date,
                start_time,
                end_time,
                staff,
                wheelchair_accessible,
                description,
            } = event;

            setValue("accessibility", wheelchair_accessible);
            setValue("name_en", event_name);
            setValue("name_cn", event_name_cn);
            setValue("location", { ...event_location });
            setValue("date", dayjs(event_date));
            setValue("start_time", dayjs(start_time, "HHmm"));
            setValue("end_time", dayjs(end_time, "HHmm"));
            setValue("description", description);
            setValue(
                "staff_present",
                staff.map((staff) => ({ name: staff }))
            );

            console.log(getValues());
        }
    }, [event]);
};

export default usePopulateEventDetailForm;
