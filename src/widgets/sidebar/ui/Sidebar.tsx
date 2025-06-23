import { UserProfileSidebar } from '@/entities/user'
import { InputSearch } from './InputSearch'
import { Navigation } from './Navigation'
import { user } from '@/shared/config'

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
	return (
		<aside className="py-8 px-4 flex flex-col justify-between basis-xs border-r-2 border-sidebar-border sticky top-0">
			<div className="space-y-8">
				<h1 className="font-bold text-4xl">Nex</h1>
				<InputSearch />
				<Navigation />
			</div>
			<UserProfileSidebar user={user} />
		</aside>
	)
}
