'use client'
import { routeConfig } from '@/shared/config'
import { Button, Input, Label } from '@/shared/ui'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '../model/schema'

interface SignInPageProps {}

export const SignInPage = ({}: SignInPageProps) => {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(loginFormSchema),
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
							<h1 className="text-4xl text-big-stone-950 font-bold text-center mb-2">
								Welcome Back 👋
							</h1>
							<p className="text-xl">
								Today is a new day. It&apos;s your day. You shape it. Sign in to start
								managing your projects.
							</p>
						</div>
						<form
							onSubmit={handleSubmit(onSubmitSignInForm)}
							className="flex flex-col w-full items-end space-y-3"
						>
							<div className="w-full space-y-6">
								<Label className="w-full">
									Email
									<Input
										placeholder="Example@email.com"
										variant={'primary'}
										type="text"
										{...register('email')}
									/>
								</Label>

								<Label>
									Password
									<Input
										placeholder="At least 8 characters"
										variant={'primary'}
										className="pr-12"
										type="password"
										{...register('password')}
									/>
								</Label>
							</div>
							<Link href={routeConfig.password_recovery}>Forgot Password?</Link>
							<Button
								type="submit"
								variant={'primary'}
								className="w-full text-xl py-2"
							>
								Sign In
							</Button>
						</form>
						<p className="text-center">
							Don&apos;t you have an account?{' '}
							<Link href={routeConfig.sign_up}>Sign up</Link>
						</p>
					</div>
					<p className="text-fiord-700">© 2025 ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</article>
	)
}
