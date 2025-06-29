'use client'
import { UserAvatar } from '@/entities/user'
import { user } from '@/shared/config'
import { OnlineStatusEnum } from '@/shared/model/types'
import { Button, Icon, IconProps } from '@/shared/ui'
import { FriendSuggestions } from './FriendSuggestions'
import { ProfileActivity } from './ProfileActivity'
import { Events } from './Events'

interface ActivitybarProps {}

const icons: IconProps['name'][] = ['ChatTeardropDots', 'BellSimple', 'GearSix']

export const Activitybar = ({}: ActivitybarProps) => {
	return (
		<aside className="basis-96 border-l-2 border-zumthor-100 sticky top-0 overflow-y-auto shrink-0">
			<header className="py-5 px-6 flex items-center justify-between sticky top-0 bg-white z-10 border-b-2 border-b-zumthor-100">
				<UserAvatar
					name={user.profile.fullname}
					avatar={user.profile.pictureUrl}
					online_status={OnlineStatusEnum.ONLINE}
					width={48}
					height={48}
				/>
				<div className="flex gap-2">
					{icons.map((icon) => (
						<Button
							key={icon}
							className="px-3 py-3 border border-link-water-200 rounded-full hover:bg-zumthor-100 hover:text-blue-violet-600"
						>
							<Icon name={icon} size={24} />
						</Button>
					))}
				</div>
			</header>
			<div className="p-6 space-y-8">
				<FriendSuggestions />
				<ProfileActivity />
				<Events />
			</div>
		</aside>
	)
}
