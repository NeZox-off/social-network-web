'use client'
import { Button, Icon } from '@/shared/ui'
import { Post } from '../model'
import { cn } from '@/shared/lib'

interface PostSocialInteractionsProps {
	post: Post
}

export const PostSocialInteractions = ({
	post,
}: PostSocialInteractionsProps) => {
	return (
		<div className='flex justify-between'>
			<div className="flex gap-6">
				<div className="flex gap-2">
					<Button
						className={cn(
							post.likes.isLiked ? 'text-blue-violet-600' : 'text-rock-blue-500'
						)}
					>
						<Icon
							name="ThumbsUp"
							size={20}
							weight={post.likes.isLiked ? 'fill' : 'bold'}
						/>
					</Button>
					<p className="text-sm">{post.likes.count} Likes</p>
				</div>
				<div className="flex gap-2">
					<Button className={cn('text-rock-blue-500')}>
						<Icon name="ChatTeardropDots" size={20} weight={'bold'} />
					</Button>
					<p className="text-sm">{post.comment.count} Comments</p>
				</div>
				<div className="flex gap-2">
					<Button className={cn('text-rock-blue-500')}>
						<Icon name="ShareFat" size={20} weight={'bold'} />
					</Button>
					<p className="text-sm">{post.share.count} Share</p>
				</div>
			</div>
			<Button className={cn('text-rock-blue-500')}>
				<Icon name="BookmarkSimple" size={20} weight={'bold'} />
			</Button>
		</div>
	)
}
