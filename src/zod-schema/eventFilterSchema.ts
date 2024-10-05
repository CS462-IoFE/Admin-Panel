import * as z from "zod";

export const eventFilterSchema = z.object({
    sort: z
        .enum(["date-descending", "date-ascending"] as const)
        .default("date-ascending"),
    is_upcoming: z.boolean().default(false),
});

export type EventFilterI = z.infer<typeof eventFilterSchema>;
