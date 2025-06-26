'use client'
import { Button, Icon } from '@/shared/ui'

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
	return (
		<header className="sticky top-0 flex-1 flex justify-between border-b-2 border-b-zumthor-100 py-5 px-8">
			<div className="flex gap-3">
				<Button className="text-fiord-700 p-3.5 rounded-full hover:bg-zumthor-100 hover:text-blue-violet-600">
					<Icon name="SidebarSimple" size={20} />
				</Button>
				<Button className="text-fiord-700 border border-link-water-200 rounded-full p-3.5 hover:bg-zumthor-100 hover:text-blue-violet-600">
					<Icon name="MagnifyingGlass" size={20} />
				</Button>
			</div>
			<Button variant={'primary'} className="px-5 py-3 gap-3 rounded-full font-bold">
				Add New Post <Icon name="PlusIcon" size={20} weight='bold' />
			</Button>
		</header>
	)
}
