import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Button } from '@/shared/ui/button'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface AuthFormBodyProps {}

export const AuthFormBody = ({}: AuthFormBodyProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = () => {}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<Label>
					Email
					<Input
						type="text"
						placeholder="Example@email.com"
						{...register('email', {
							required: `Email is required`,
						})}
					/>
				</Label>
				<Label>
					Email
					<Input
						type="text"
						placeholder="Example@email.com"
						{...register('email', {
							required: `Email is required`,
						})}
					/>
				</Label>
			</div>
			<Link href={'/a/password-recovery'}>Forgot Password?</Link>
			<Button>Login</Button>
		</form>
	)
}
