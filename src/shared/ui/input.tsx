import { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
	'inline-flex w-full py-3 px-4 bg-transparent rounded border border-transparent text-primary placeholder:text-primary focus:outline-dashed focus:outline-offset-1 focus:outline-white',
	{
		variants: {
			variant: {
				primary:
					'bg-white rounded-full border-link-water-200 text-fiord-700 placeholder:text-fiord-700 focus:outline-fiord-100',
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
