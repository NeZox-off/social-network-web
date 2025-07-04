import { Post } from '@/entities/post'
import { UserAvatar } from '@/entities/user'
import { OnlineStatusEnum } from '@/shared/model'
import { Button, CardHeader, Icon } from '@/shared/ui'

interface PostHeaderProps {
	user: Post['user']
}

export const PostHeader = ({ user }: PostHeaderProps) => {
	return (
		<CardHeader className="flex justify-between">
			<div className="flex items-center gap-3">
				<UserAvatar
					online_status={OnlineStatusEnum.OFFLINE}
					name="T"
					avatar={user.pictureUrl}
					width={40}
					height={40}
				/>
				<div>
					<h3 className="font-bold text-sm">{user.fullname}</h3>
					<p className="text-sm text-fiord-700">
						{[user.role, user.job_title].join(', ')}
					</p>
				</div>
			</div>
			<Button className="text-link-water-200 rounded-full p-2 hover:bg-zumthor-100 hover:text-blue-violet-600">
				<Icon name="DotsThreeVertical" size={20} weight="bold" />
			</Button>
		</CardHeader>
	)
}
