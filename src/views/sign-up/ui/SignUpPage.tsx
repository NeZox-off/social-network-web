'use client'
import { routeConfig } from '@/shared/config'
import { Button, Input, Label } from '@/shared/ui'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from '../model/schema'

interface SignUpPageProps {}

const fields: {
	title: string
	type: 'text' | 'email' | 'password'
	formRegister: 'email' | 'password' | 'username' | 'fullname'
	placeholder: string
}[] = [
	{
		title: 'Fullname',
		type: 'text',
		formRegister: 'fullname',
		placeholder: 'e.x. Rick Novak',
	},
	{
		title: 'Username',
		type: 'text',
		formRegister: 'username',
		placeholder: 'example.test',
	},
	{
		title: 'Email',
		type: 'text',
		formRegister: 'email',
		placeholder: 'Example@email.com',
	},
	{
		title: 'Password',
		type: 'password',
		formRegister: 'password',
		placeholder: 'At least 8 characters',
	},
]

export const SignUpPage = ({}: SignUpPageProps) => {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			username: null,
		},
		mode: 'onSubmit',
	})

	const onSubmitSignInForm = (values: { email: string; password: string }) => {
		console.log(values)
	}

	return (
		<article className="p-8 h-dvh w-full flex justify-center items-center">
			<div className="container mx-auto px-3">
				<div className="flex flex-col items-center">
					<div className="max-w-[26.875rem] flex flex-col space-y-12 mb-20">
						<div>
							<h1 className="text-4xl text-slate-900 font-bold text-center mb-2">
								Create an account
							</h1>
							<p className="text-xl">Connect with your friends today!</p>
						</div>
						<form
							onSubmit={handleSubmit(onSubmitSignInForm)}
							className="flex flex-col w-full items-end space-y-6"
						>
							<div className="w-full space-y-3">
								{fields.map((field) => (
									<Label className="w-full" key={field.title}>
										{field.title}
										<Input
											variant={'primary'}
											type={field.type}
											placeholder={field.placeholder}
											{...register(field.formRegister)}
										/>
									</Label>
								))}
							</div>
							<Link href={routeConfig.password_recovery}>Forgot Password?</Link>
							<Button
								type="submit"
								variant={'primary'}	
								className="w-full text-xl py-2"
							>
								Sign up
							</Button>
						</form>
						<p className="text-center">
							Don&apos;t you have an account?{' '}
							<Link href={routeConfig.sign_in}>Sign in</Link>
						</p>
					</div>
					<p className="text-muted">© 2025 ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</article>
	)
}
