'use client'
import { routeConfig } from '@/shared/config'
import { Button, Input, Label } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'
import styles from './sign-in.module.scss'
import img from '../../../../public/images/auth/login-space-img.jpg'

interface SignInPageProps {}

export const SignInPage = ({}: SignInPageProps) => {
	return (
		<article className={styles.login}>
			<div className="container">
				<div className={styles.login__blocks}>
					<div className={styles.login__section}>
						<div className={styles.login__wrapper}>
							<div className={styles.login__header}>
								<h1>Welcome Back 👋</h1>
								<p>
									Today is a new day. It&apos;s your day. You shape it. Sign in to start
									managing your projects.
								</p>
							</div>
							<form action="" className={styles.login__form}>
								<div>
									<Label>
										Email
										<Input />
									</Label>
									<Label>
										Password
										<Input />
									</Label>
								</div>
								<Link href={routeConfig.password_recovery}>Forgot Password?</Link>
								<Button>Sign In</Button>
							</form>
							<p className={styles.login__copyright}>
								Don&apos;t you have an account?{' '}
								<Link href={routeConfig.sign_up}>Sign up</Link>
							</p>
						</div>
						<p>© 2025 ALL RIGHTS RESERVED</p>
					</div>
					<div className={styles.login__image}>
						<Image src={img} alt="as" layout="fill" />
						<div>
							<p>from</p>
							<div>
								<Image
									src={'/images/shared/logo-white.svg'}
									width={44}
									height={30}
									alt="White NEX logo"
								/>
								<span>nex</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}
