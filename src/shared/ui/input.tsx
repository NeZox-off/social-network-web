import { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva('', {
	variants: {
		variant: {
			default: 'input-default',
			primary: 'input-primary',
		},
	},
})

export const Input = ({
	type = 'text',
	className,
	variant = 'default',
	ref,
	...props
}: ComponentProps<'input'> & VariantProps<typeof inputVariants>) => {
	return (
		<input
			ref={ref}
			type={type}
			className={cn(inputVariants({ variant, className }))}
			{...props}
		/>
	)
}
