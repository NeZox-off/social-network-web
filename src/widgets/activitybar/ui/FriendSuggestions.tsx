'use client'
import Link from 'next/link'
import { TEST_FRIEND_SUGGESTIONS } from '../store'
import { routeConfig } from '@/shared/config'
import { UserAvatar } from '@/entities/user'
import { OnlineStatusEnum } from '@/shared/model'
import { Button, Icon } from '@/shared/ui'

interface FriendSuggestionsProps {}

export const FriendSuggestions = ({}: FriendSuggestionsProps) => {
	return (
		<div className="space-y-6">
			<div className="flex justify-between">
				<h2 className="text-lg text-primary font-bold">Friend Suggestions</h2>
				<Link
					href={routeConfig.explore_people}
					className="inline-flex text-sm gap-2 items-end text-secondary font-bold"
				>
					See all <Icon name="ArrowUpRight" size={20} />{' '}
				</Link>
			</div>
			<ul className='flex flex-col gap-1'>
				{TEST_FRIEND_SUGGESTIONS.map((friend) => (
					<li key={friend.id} className="py-4 flex items-center gap-3 justify-between border-b-2 border-b-white-light">
						<div className="flex items-center max-w-2xs gap-3">
							<Link href={friend.username}>
								<UserAvatar
									avatar={friend.avatar}
									name={friend.fullname}
									width={40}
									height={40}
									online_status={OnlineStatusEnum.ONLINE}
								/>
							</Link>
							<div>
								<Link href={friend.username} className="text-muted font-bold text-sm transition-colors duration-150 hover:text-primary/90">
									{friend.fullname}
								</Link>
								<p className="text-muted text-sm">@{friend.username}</p>
							</div>
						</div>
						<Button className='rounded-full p-2 hover:bg-counter/20 hover:text-secondary'>
							<Icon name="Plus" size={20} />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}
