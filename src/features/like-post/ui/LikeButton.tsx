import { Post } from '@/entities/post'
import { cn } from '@/shared/lib'
import { Button, Icon } from '@/shared/ui'
import { useCallback, useState } from 'react'

interface LikeButtonProps {
	likes: Post['likes']
}

export const LikeButton = ({ likes }: LikeButtonProps) => {
	const [isLiked, setIsLiked] = useState(likes.isLiked)
	const handleLike = useCallback(() => {
		setIsLiked((prev) => !prev)
	}, [])

	return (
		<div className="flex gap-2 items-center">
			<Button
				onClick={handleLike}
				className={cn(
					'p-1 rounded-full hover:bg-zumthor-400',
					isLiked ? 'text-blue-violet-600' : 'text-rock-blue-500'
				)}
			>
				<Icon name="ThumbsUp" size={20} weight={'bold'} />
			</Button>
			<p className="text-sm">{likes.count} Likes</p>
		</div>
	)
}
