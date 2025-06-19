import { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
	'inline-flex w-full py-3 px-4 bg-transparent rounded border border-transparent text-primary placeholder:text-primary focus:outline-dashed focus:outline-offset-1 focus:outline-white',
	{
		variants: {
			variant: {
				primary:
					'bg-input-primary border-input-border-primary text-input-text-primary placeholder:text-input-text-primary focus:outline-input-text-primary/40',
				secondary: 'input-primary',
			},
		},
	}
)

export const Input = ({
	type = 'text',
	className,
	variant,
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
