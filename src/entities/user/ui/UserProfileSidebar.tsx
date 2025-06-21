"use client"
import { Button, Icon } from '@/shared/ui'
import { UserAvatar } from './UserAvatar'

interface UserProfileSidebarProps {}

enum UserRoleEnum {
	'BASIC' = 'Basic Member',
}

type UserType = {
	fullname: string
	role: UserRoleEnum.BASIC
	avatar: string | null
}

const user: UserType = {
	fullname: 'Maksym Poliakov',
	role: UserRoleEnum.BASIC,
	avatar: null,
}

export const UserProfileSidebar = ({}: UserProfileSidebarProps) => {
	return (
		<div className='flex items-center rounded-full p-1 justify-between transition-colors duration-150 hover:bg-counter/40'>
			<div className="flex items-center gap-3">
				<UserAvatar avatar={user.avatar} name={user.fullname} />
				<div>
					<h3 className="font-bold truncate max-w-40">{user.fullname}</h3>
					<p className="text-sm font-medium">{user.role}</p>
				</div>
			</div>
			<Button className='px-1.5 p-1.5 rounded-full bg-transparent hover:bg-counter/80'>
				<Icon name="SignOut" size={24} />
			</Button>
		</div>
	)
}
