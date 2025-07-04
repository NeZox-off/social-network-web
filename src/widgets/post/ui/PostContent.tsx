import { Post, PostType, QuestionPost } from '@/entities/post'
import { CardContent } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

interface PostContentProps {
	post_details: Post['post_details']
}

export const PostContent = ({ post_details }: PostContentProps) => {
	return (
		<CardContent className="space-y-4">
			{!!post_details.description && post_details.tags.length !== 0 && (
				<p className="text-sm font-normal">
					{post_details.description}
					{post_details.tags.map((tag) => (
						<Link key={tag} href={`/tags?=${tag}`} className="text-blue-violet-600">
							{tag}{' '}
						</Link>
					))}
				</p>
			)}
			{post_details.post_image && (
				<div className="w-full h-64 relative rounded-2xl bg-zumthor-100">
					<Image
						src={post_details.post_image}
						fill
						sizes='100vw'
						className="rounded-2xl object-center h-full"
						alt={`Post with ${post_details.description}`}
					/>
				</div>
			)}
			{post_details.type === PostType.QUESTIONNAIRE && (
				<QuestionPost post_details={post_details} />
			)}
		</CardContent>
	)
}
