import * as z from "zod";

export const userFilterSchema = z.object({
    sort: z
        .enum([
            "date-descending",
            "date-ascending",
            "name-ascending",
            "name-descending",
        ] as const)
        .default("name-ascending"),
});

export type UserFilterI = z.infer<typeof userFilterSchema>