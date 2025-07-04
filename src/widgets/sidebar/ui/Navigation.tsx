'use client'
import { routeConfig } from '@/shared/config'
import { Icon, IconProps } from '@/shared/ui'
import Link from 'next/link'

interface NavigationProps {}

type NavigationLink = {
	icon: IconProps['name']
	title: string
	link: string
	notificationCount: number
}

const navigationLinks: NavigationLink[] = [
	{
		icon: 'House',
		title: 'Feed',
		link: routeConfig.feed,
		notificationCount: 10,
	},
	{
		icon: 'ListBullets',
		title: 'Stories',
		link: routeConfig.stories,
		notificationCount: 0,
	},
	{
		icon: 'Aperture',
		title: 'Videos',
		link: routeConfig.videos,
		notificationCount: 0,
	},
	{
		icon: 'Chat',
		title: 'Chat',
		link: routeConfig.chat,
		notificationCount: 0,
	},
]
export const Navigation = ({}: NavigationProps) => {
	return (
		<ul>
			{navigationLinks.map((link) => (
				<li key={link.title}>
					<Link
						href={link.link}
						className="text-big-stone-950 flex font-bold items-center justify-between p-3 transition-colors duration-150 hover:bg-zumthor-100"
					>
						<span className="inline-flex gap-2 items-center">
							<Icon name={link.icon} size={24} className="text-rock-blue-500" />
							{link.title}
						</span>
						{!!link.notificationCount && (
							<span className="py-0.5 px-2.5 text-center h-7 border border-zumthor-300 bg-zircon-50 rounded-full text-blue-violet-600 text-sm font-semibold">
								{link.notificationCount}
							</span>
						)}
					</Link>
				</li>
			))}
		</ul>
	)
}
