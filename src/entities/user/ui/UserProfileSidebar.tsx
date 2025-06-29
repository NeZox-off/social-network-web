'use client'
import { Button, Icon } from '@/shared/ui'
import { UserAvatar } from './UserAvatar'
import { User } from '@/shared/model/types'

interface UserProfileSidebarProps {
	user: User
}

export const UserProfileSidebar = ({ user }: UserProfileSidebarProps) => {
	return (
		<div className="flex items-center p-1 justify-between">
			<div className="flex items-center gap-3">
				<UserAvatar
					avatar={user.profile.pictureUrl}
					name={user.profile.fullname}
					online_status={user.profile.online_status}
					width={40}
					height={40}
				/>
				<div>
					<h3 className="font-bold truncate max-w-40">{user.profile.fullname}</h3>
					<p className="text-sm font-medium">{user.details.role}</p>
				</div>
			</div>
			<Button className="px-1.5 p-1.5 rounded-full bg-transparent hover:bg-zumthor-100 hover:text-blue-violet-600">
				<Icon name="SignOut" size={24} />
			</Button>
		</div>
	)
}
