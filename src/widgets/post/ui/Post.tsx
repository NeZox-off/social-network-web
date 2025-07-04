import { Card } from '@/shared/ui'
import { PostHeader } from './PostHeader'
import { PostContent } from './PostContent'
import { PostFooter } from './PostFooter'
import type { Post as TPost } from '@/entities/post'

interface PostProps {
	data: TPost
}

export const Post = ({ data }: PostProps) => {
	return (
		<Card className="border-2 border-zumthor-100 rounded-3xl bg-white shadow shadow-big-stone-950/10">
			<PostHeader user={data.user} />
			<PostContent post_details={data.post_details} />
			<PostFooter data={data} />
		</Card>
	)
}
