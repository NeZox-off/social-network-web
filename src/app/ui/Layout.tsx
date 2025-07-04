import { cn } from '@/shared/lib'
import { Activitybar } from '@/widgets/activitybar'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'
import { ComponentProps, PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {
	isSidebar?: boolean
	isHeader?: boolean
	isActivitybar?: boolean
	className?: string
}

export const Layout = ({
	children,
	isSidebar = true,
	isActivitybar = true,
	isHeader = true,
	className,
}: LayoutProps & ComponentProps<'div'>) => {
	return (
		<article className="h-dvh flex relative">
			{isSidebar && <Sidebar />}
			<main className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-zumthor-100 scrollbar-track-sky-300">
				{isHeader && <Header />}
				<div className={cn('px-32 py-6', className)}>{children}</div>
			</main>
			{isActivitybar && <Activitybar />}
		</article>
	)
}
