import { z } from 'zod'

const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

const loginFormSchema = z.object({
	email: z.string().email('Email is required!').regex(regex),
	password: z.string().min(8, 'Password should at least 8 characters!'),
})

type LoginFormType = z.infer<typeof loginFormSchema>

export { loginFormSchema, type LoginFormType }
