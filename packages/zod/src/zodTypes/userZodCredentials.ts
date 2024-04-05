import z from "zod"

export const userZodCredentials = z.object({
    phone: z
        .string()
        .min(10, { message: 'Must be valid mobile number' })
        .max(14, { message: 'Must be valid mobile number'}),
    password: z
        .string()
        .min(8, { message: 'Password must contain 8 charaters' })
        .max(50, { message: 'Password must not exceed 50 characters' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, { message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character' })
})

