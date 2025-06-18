import { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva('', {
	variants: {
		variant: {
			default: 'btn-default',
			primary: 'btn-primary',
		},
	},
})

export const Button = ({
	className,
	type = 'button',
	variant = 'default',
	...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) => {
	return (
		<button
			type={type}
			className={cn(buttonVariants({ variant, className }))}
			{...props}
		/>
	)
}
