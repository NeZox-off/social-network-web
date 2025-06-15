import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'

interface LabelProps
	extends DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	> {}

export const Label = ({ className, ref, ...props }: LabelProps) => {
	return <label ref={ref} className={cn(className)} {...props} />
}
