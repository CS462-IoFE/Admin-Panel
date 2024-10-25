import dayjs from "dayjs";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { EventDetails } from "../../types/event";
import { EditEventFormI } from "../../zod-schema/editEventSchema";

const usePopulateEventDetailForm = (
    formState: UseFormReturn<EditEventFormI>,
    event?: EventDetails
) => {
    const { reset } = formState;

    useEffect(() => {
        if (event) {
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
                description_cn,
                participant_limit,
                essential_item,
            } = event;

            reset({
                accessibility: wheelchair_accessible,
                name_en: event_name,
                name_cn: event_name_cn,
                location: { ...event_location },
                date: dayjs(event_date),
                start_time: dayjs(start_time, "HHmm"),
                end_time: dayjs(end_time, "HHmm"),
                description: description,
                description_cn: description_cn,
                staff_present: staff.map((staff) => ({ name: staff })),
                participant_limit: participant_limit,
                essential_item:
                    essential_item && essential_item.length > 0
                        ? essential_item
                              .split(",")
                              .map((it) => ({ name: it.trim() }))
                        : ([] as { name: string }[]),
            });
        }
    }, [event]);
};

export default usePopulateEventDetailForm;
