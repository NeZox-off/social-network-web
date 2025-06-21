import { DetailedHTMLProps, LabelHTMLAttributes, memo } from 'react'
import { cn } from '@/shared/lib/utils'

interface LabelProps
	extends DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	> {}

export const Label = memo(({ className, ref, ...props }: LabelProps) => {
	return <label ref={ref} className={cn("w-full flex flex-col gap-2", className)} {...props} />
})


Label.displayName = "Label"