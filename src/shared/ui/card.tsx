import { cloneElement, ComponentProps, forwardRef, isValidElement } from 'react'
import { cn } from '../lib'

const Card = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
	return <div ref={ref} data-slot="card" className={cn(className)} {...props} />
})

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, ComponentProps<'header'>>(
	({ children, className, ...props }, ref) => {
		return (
			<header ref={ref} data-slot="card-header" {...props} className={cn(className, 'p-5 border-b-2 border-zumthor-100')}>
				{children}
			</header>
		)
	}
)

CardHeader.displayName = 'CardHeader'

interface CardContentProps extends ComponentProps<"div"> {
	asChild?: boolean
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	({ asChild, children, className, ...props }, ref) => {
		const content = (
			<div ref={ref} data-slot="card-content" {...props} className={cn(className, 'p-5')}>
				{children}
			</div>
		)

		if (asChild && isValidElement(children)) {
			return cloneElement(children, { ...props })
		}

		return content
	}
)

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, ComponentProps<'footer'>>(
	({ children, className, ...props }, ref) => {
		return (
			<footer ref={ref} data-slot="card-footer" {...props} className={cn(className, 'p-5 border-t-2 border-zumthor-100')}>
				{children}
			</footer>
		)
	}
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }
