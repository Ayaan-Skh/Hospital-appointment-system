import { strict } from "assert"
import z from "zod"

export const UserFormValidation = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email:z.string().email("Invalid Email Address"),
    phone:z.string().refine((phone)=> /^\+?[1-9]\d{1-14}$/.test(phone),"Invalid Phone number")
})