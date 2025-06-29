'use client'
import { TEST_POSTS } from '@/entities/post'
import { Stories } from '@/entities/stories'
import dynamic from 'next/dynamic'

interface FeedPageProps {}

const PostComponent = dynamic(() =>
	import('@/entities/post').then((mod) => mod.default)
)

export const FeedPage = ({}: FeedPageProps) => {
	return (
		<div className='space-y-4'>
			<Stories />
			<div className='space-y-4'>
				{TEST_POSTS.map((post) => (
					<PostComponent data={post} key={post.post_id} />
				))}
			</div>
		</div>
	)
}
