import { Button, Icon, Input } from '@/shared/ui'
import { ComponentProps, useState } from 'react'
import { cn } from '@/shared/lib/utils'

interface InputPasswordPreviewProps extends ComponentProps<'input'> {}

export const InputPasswordPreview = ({
	...props
}: InputPasswordPreviewProps) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<div className="">
			{showPassword ? (
				<Input
					type="text"
					className={cn()}
					{...props}
				/>
			) : (
				<Input
					className={cn()}
					type="password"
					{...props}
				/>
			)}
			<Button className="" onClick={() => setShowPassword((prev) => !prev)}>
				<Icon name={showPassword ? "Eye" : "EyeSlash"} size={24} />
			</Button>
		</div>
	)
}
