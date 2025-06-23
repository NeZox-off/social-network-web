import { Activitybar, Sidebar } from '@/widgets/index'

interface FeedPageProps {}

export const FeedPage = ({}: FeedPageProps) => {
	return (
		<article className="h-dvh flex">
			<Sidebar />
			<main className='flex-1'></main>
			<Activitybar />
		</article>
	)
}
