import * as z from "zod"


export const addRemarkSchema = z.object({
    remark: z.string().min(3)
})

export type AddRemarkFormI = z.infer<typeof addRemarkSchema>