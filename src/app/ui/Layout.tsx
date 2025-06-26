import { Activitybar } from '@/widgets/activitybar'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'
import { PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<article className="h-dvh flex relative">
			<Sidebar />
			<main className="flex-1">
				<Header />
				{children}
			</main>
			<Activitybar />
		</article>
	)
}
