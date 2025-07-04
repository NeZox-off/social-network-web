import { Post } from '@/entities/post'
import { LikeButton } from '@/features/like-post'
import { cn } from '@/shared/lib'
import { Button, CardFooter, Icon } from '@/shared/ui'

interface PostFooterProps {
	data: Post
}

export const PostFooter = ({ data }: PostFooterProps) => {
	return (
		<>
			<CardFooter className="flex justify-between">
				<div className="flex gap-6">
					<LikeButton likes={data.likes} />
					<div className="flex gap-2 items-center">
						<Button className={cn('text-rock-blue-500')}>
							<Icon name="ChatTeardropDots" size={20} weight={'bold'} />
						</Button>
						<p className="text-sm">{data.comment.count} Comments</p>
					</div>
					<div className="flex gap-2 items-center">
						<Button className={cn('text-rock-blue-500')}>
							<Icon name="ShareFat" size={20} weight={'bold'} />
						</Button>
						<p className="text-sm">{data.share.count} Share</p>
					</div>
				</div>
				<Button className={cn('text-rock-blue-500')}>
					<Icon name="BookmarkSimple" size={20} weight={'bold'} />
				</Button>
			</CardFooter>
		</>
	)
}
