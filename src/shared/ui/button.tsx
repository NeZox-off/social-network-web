import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
	className,
	type = 'button',
	...props
}: ButtonProps) => {
	return <button type={type} className={cn(className)} {...props} />
}
