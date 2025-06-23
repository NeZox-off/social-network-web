import { ComponentProps, memo } from 'react'
import { cn } from '@/shared/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md border cursor-pointer border-transparent transition-all duration-300 bg-white [&_svg]:pointer-events-none shrink-0 active:bg-black/30 focus:bg-black/30 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary:
					'text-btn-text-primary bg-btn-primary active:bg-btn-primary/80 hover:bg-btn-primary/80 focus:bg-btn-primary/80',
			},
		},
	}
)

export const Button = memo(
	({
		className,
		type = 'button',
		variant,
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
)

Button.displayName = 'Button'
