'use client'
import { routeConfig } from '@/shared/config'
import { Button, Input, Label } from '@/shared/ui'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '../model/schema'

interface SignInPageProps {}

export const SignInPage = ({}: SignInPageProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
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
					<div className="max-w-[26.875rem] flex flex-col space-y-12 mb-28">
						<div>
							<h1 className="text-4xl text-slate-900 font-bold text-center mb-7">
								Welcome Back 👋
							</h1>
							<p className="text-xl">
								Today is a new day. It&apos;s your day. You shape it. Sign in to start
								managing your projects.
							</p>
						</div>
						<form
							onSubmit={handleSubmit(onSubmitSignInForm)}
							className="flex flex-col w-full items-end space-y-6"
						>
							<div className="w-full space-y-6">
								<div className="space-y-2">
									<Label className="w-full">
										Email
										<Input variant={'primary'} type="text" {...register('email')} />
									</Label>
									{errors.email && (
										<p className={cn('text-red-500/70')}>{errors.email.message}</p>
									)}
								</div>
								<div className="space-y-2">
									<Label>
										Password
										<Input
											variant={'primary'}
											className="pr-12"
											type="password"
											{...register('password')}
										/>
									</Label>
									{errors.password && (
										<p className={cn('text-red-500/70')}>{errors.password.message}</p>
									)}
								</div>
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
					<p className="text-muted">© 2025 ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</article>
	)
}
