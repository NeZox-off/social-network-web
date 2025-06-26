import { cn } from '@/shared/lib/utils'
import * as Icons from '@phosphor-icons/react'
import React from 'react'
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react'

export interface IconProps extends PhosphorIconProps {
	name: keyof typeof Icons
	className?: string
	weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
	size?: number | string
	color?: string
}

export const Icon = ({
	name,
	className,
	weight,
	size,
	color,
	...props
}: IconProps) => {
	const IconComponent = Icons[name] as React.ElementType

	if (!IconComponent) {
		console.warn(`Icon "${name}" not found in @phosphor-icons/react`)
		return null
	}

	return (
		<IconComponent
			weight={weight}
			size={size}
			color={color}
			className={cn(className)}
			{...props}
		/>
	)
}
