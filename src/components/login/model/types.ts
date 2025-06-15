import { z } from 'zod'

const inputSchema = z.object({
	name: z.string(),
	type: z.enum(['text', 'password', 'email', 'checkbox', 'radio']),
	label: z.string(),
	placeholder: z.string(),
	required: z.boolean(),
})

type InputTypes = z.infer<typeof inputSchema>

export { inputSchema, type InputTypes }
