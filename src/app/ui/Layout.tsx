import { Activitybar } from '@/widgets/activitybar'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'
import { PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<article className="h-dvh flex relative">
			<Sidebar />
			<main className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-zumthor-100 scrollbar-track-sky-300">
				<Header />
				<div className='px-8 py-6'>{children}</div>
			</main>
			<Activitybar />
		</article>
	)
}
