'use client'
import { routeConfig } from '@/shared/config'
import { Button, Input, Label } from '@/shared/ui'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '../model/schema'
import { InputPasswordPreview } from './InputPasswordPreview'

interface SignInPageProps {}

export const SignInPage = ({}: SignInPageProps) => {
	const {
		register,
		watch,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	})
	return (
		<article className="p-8 h-dvh w-full flex justify-center items-center">
			<div className="container mx-auto px-3">
				<div className="flex flex-col items-center">
					<div className="max-w-[26.875rem] flex flex-col space-y-12 mb-28">
						<div>
							<h1 className="text-4xl text-slate-900 font-bold  mb-7">
								Welcome Back 👋
							</h1>
							<p className="text-xl">
								Today is a new day. It&apos;s your day. You shape it. Sign in to start
								managing your projects.
							</p>
						</div>
						<form action="" className="flex flex-col w-full items-end space-y-6">
							<div className="flex flex-col w-full space-y-6">
								<Label className="w-full">
									Email
									<Input variant={"primary"} type='text' {...register('email')} />
								</Label>
								<Label className={cn()}>
									Password
									<InputPasswordPreview {...register('password')} />
								</Label>
							</div>
							<Link href={routeConfig.password_recovery}>Forgot Password?</Link>
							<Button variant={'primary'} className="w-full">
								Sign In
							</Button>
						</form>
						<p className="text-center">
							Don&apos;t you have an account?{' '}
							<Link href={routeConfig.sign_up}>Sign up</Link>
						</p>
					</div>
					<p className='text-muted'>© 2025 ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</article>
	)
}
