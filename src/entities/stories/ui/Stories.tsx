'use client'
import Link from 'next/link'
import { TEST_STORIES_DATA } from '../store'
import { routeConfig } from '@/shared/config'
import { UserAvatar } from '@/entities/user'
import { OnlineStatusEnum } from '@/shared/model'
import { Button, Icon } from '@/shared/ui'

interface StoriesProps {}

export const Stories = ({}: StoriesProps) => {
	return (
		<div className="p-5 rounded-3xl shadow-lg shadow-big-stone-950/10 relative">
			<nav className="flex gap-4 items-center overflow-hidden overflow-x-scroll max-w-5xl scrollbar-none">
				{TEST_STORIES_DATA.map((story) => (
					<Link
						key={story.stories_id}
						href={routeConfig.stories + `/${story.user.username}`}
						className="inline-flex flex-col items-center gap-y-2 text-fiord-700 font-semibold text-sm"
					>
						<UserAvatar
							name={story.user.fullname}
							avatar={story.user.pictureUrl}
							width={64}
							height={64}
							online_status={OnlineStatusEnum.OFFLINE}
						/>
						{story.user.username.toLowerCase()}
					</Link>
				))}
			</nav>
			<Button className="absolute top-1/2 -translate-y-1/2 right-5 p-1.5 rounded-full bg-white border border-zumthor-100 shadow shadow-zumthor-100 hover:bg-zumthor-100 hover:text-blue-violet-600">
				<Icon name="ArrowRight" size={20} />
			</Button>
		</div>
	)
}
