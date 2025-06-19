import { cn } from '@/shared/lib/utils'
import { Button, Icon, Input } from '@/shared/ui'
import { ComponentProps, useState } from 'react'

interface InputPasswordPreviewProps extends ComponentProps<'input'> {}

export const InputPasswordPreview = ({
	...props
}: InputPasswordPreviewProps) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<div className="relative">
			<Input variant={"primary"} className='pr-12' type={showPassword ? "password" : "text"} {...props}/>
			<Button className={cn("absolute top-1/2 -translate-y-1/2 right-3 rounded-full px-1 py-1")} onClick={() => setShowPassword((prev) => !prev)}>
				<Icon name={showPassword ? 'Eye' : 'EyeSlash'} size={24} />
			</Button>
		</div>
	)
}
