'use client'
import { TEST_POSTS } from '@/entities/post'
import { Stories } from '@/entities/stories'
import { Activitybar } from '@/widgets/activitybar'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'
import dynamic from 'next/dynamic'

interface FeedPageProps {
	isLoading: boolean
}

const PostComponent = dynamic(() =>
	import('@/widgets/post').then((mod) => mod.Post)
)

export const FeedPage = ({ isLoading }: FeedPageProps) => {
	return (
		<article className="h-dvh flex relative">
			<Sidebar />
			<main className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-zumthor-100 scrollbar-track-sky-300">
				<Header />
				<div className={'px-32 py-6'}>
					<div className="space-y-4">
						<Stories />
						<div className="space-y-4">
							{!isLoading ? (
								TEST_POSTS.map((post) => (
									<PostComponent data={post} key={post.post_id} />
								))
							) : (
								<>a</>
							)}
						</div>
					</div>
				</div>
			</main>
			<Activitybar />
		</article>
	)
}
