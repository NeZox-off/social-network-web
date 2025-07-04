import { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md border cursor-pointer border-transparent transition-all duration-300 bg-white [&_svg]:pointer-events-none shrink-0 active:bg-transparent focus:bg-transparent disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary:
					'text-white bg-blue-violet-600 active:bg-blue-violet-800 hover:bg-blue-violet-800 focus:bg-blue-violet-800',
			},
		},
	}
)

export const Button = ({
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

Button.displayName = 'Button'
