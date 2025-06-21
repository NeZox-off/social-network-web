import { Sidebar } from '@/widgets/feed'

interface FeedPageProps {}

export const FeedPage = ({}: FeedPageProps) => {
	return (
		<article className='h-dvh flex'>
			<Sidebar />
		</article>
	)
}
