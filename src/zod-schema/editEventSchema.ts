import dayjs, {Dayjs} from "dayjs"
import * as z from "zod"

const locationSchema = z.object({
    formatted_address: z.string(),
    lat: z.number(),
    lon: z.number(),
    name: z.string(),
});

export const editEventSchema = z.object({
    accessibility: z.boolean().default(false),
    start_time: z.instanceof(dayjs as unknown as typeof Dayjs, {
        message: "Please input an appropriate start time",
    }),
    end_time: z.instanceof(dayjs as unknown as typeof Dayjs, {
        message: "Please input an appropriate end time",
    }),
    location: locationSchema,
    name_en: z.string().min(3),
    name_cn: z.string().min(1),
    staff_present: z.array(
        z.object({
            name: z.string().min(1, { message: "Please select staff" }),
        })
    ),
    date: z.instanceof(dayjs as unknown as typeof Dayjs, {
        message: "Please input an appropriate date",
    }),
})

export type EditEventFormI = z.infer<typeof editEventSchema>