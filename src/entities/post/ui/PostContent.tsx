import Link from 'next/link'
import { Post, PostType } from '../model'
import Image from 'next/image'
import { PostSocialInteractions } from './PostSocialInteractions'

interface PostContentProps {
	post: Post
}

/* 

function percentOfVotes(total, counts) {
  const result = [];
  for (const count of counts) {
    result.push(((count / total) * 100).toFixed(2))
  }
  return result
}

*/

export const PostContent = ({ post }: PostContentProps) => {
	return (
		<div className="p-5 space-y-4">
			<div className="space-y-4">
				{!!post.post_details.description && post.post_details.tags.length !== 0 && (
					<p className="text-sm font-normal">
						{post.post_details.description}
						{post.post_details.tags.map((tag) => (
							<Link key={tag} href={`/tags?=${tag}`} className="text-blue-violet-600">
								{tag}{' '}
							</Link>
						))}
					</p>
				)}
				{post.post_details.type === PostType.DEFAULT ? (
					post.post_details.post_image && (
						<div className="w-full h-80 relative rounded-2xl bg-zumthor-100">
							<Image
								src={post.post_details.post_image}
								layout="fill"
								className="rounded-2xl object-contain object-center"
								alt={`Post with ${post.post_details.description}`}
							/>
						</div>
					)
				) : (
					<div className="p-4 space-y-4 border border-zumthor-100 rounded-3xl"></div>
				)}
			</div>
			<PostSocialInteractions post={post} />
		</div>
	)
}
