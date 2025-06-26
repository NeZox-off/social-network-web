'use client'
import { Icon, Input, Label } from '@/shared/ui'

interface InputSearchProps {}

export const InputSearch = ({}: InputSearchProps) => {
	return (
		<Label className="flex-row items-center border border-link-water-200 rounded-full px-3">
			<Icon name="MagnifyingGlass" className="text-fiord-700" size={20} />
			<Input type="search" placeholder="Search..." className="py-2 px-0 pr-3" />
		</Label>
	)
}
