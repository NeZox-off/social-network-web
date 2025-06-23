import { UserAvatar } from '@/entities/user'
import { Button, Icon } from '@/shared/ui'
import { TEST_FRIEND_SUGGESTIONS } from '../store'
import { OnlineStatusEnum } from '@/shared/model'
import Link from 'next/link'

interface ProfileActivityProps {}

export const ProfileActivity = ({}: ProfileActivityProps) => {
	return (
		<div className='space-y-5'>
			<div className='flex items-end justify-between'>
				<h2 className='text-lg text-primary font-bold'>Profile Activity</h2>
				<Button className='text-[#CBD5E1]'>
					<Icon name="DotsThreeVertical" size={24} weight="bold" />
				</Button>
			</div>
			<div className="bg-[#EEF2FF] border-2 border-[#C7D2FE] px-4 p-6 rounded-3xl space-y-5">
				<div className="flex">
					{TEST_FRIEND_SUGGESTIONS.map((friend) => (
						<Link href={friend.username} key={friend.id} className="-mr-3">
							<UserAvatar
								avatar={null}
								width={40}
								height={40}
								name={friend.fullname}
								online_status={OnlineStatusEnum.OFFLINE}
								className="bg-counter border-2 border-white"
							/>
						</Link>
					))}
				</div>
				<div className="space-y-5">
					<div className="flex gap-1 items-end">
						<h3 className='font-bold text-2xl'>+1,158</h3>
						<p className='text-[#475569] font-medium'>Followers</p>
					</div>
					<div className='flex gap-1'>
						<p className='flex items-end gap-1 text-[#15803D] font-bold'>
							<Icon name="TrendUp" size={20} className='text-[#22C55E]' weight='bold' />
							23%
						</p>
						<p className='font-medium text-[#475569] text-sm'>vs last month</p>
					</div>
					<p className='text-[#475569] font-medium'>You gained a substantial amount of followers this month!</p>
				</div>
			</div>
		</div>
	)
}
