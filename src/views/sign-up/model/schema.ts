import { z } from 'zod'

const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

const registerFormSchema = z.object({
	fullname: z.string().min(2, 'Full name should at least 2 characters!'),
	username: z.union([z.string(), z.null()]).default(null),
	email: z.string().email('Email is required!').regex(regex),
	password: z.string().min(8, 'Password should at least 8 characters!'),
})

type RegisterFormType = z.infer<typeof registerFormSchema>

export { registerFormSchema, type RegisterFormType }
