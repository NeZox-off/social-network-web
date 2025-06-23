"use client"
import { Icon, Input, Label } from '@/shared/ui'

interface InputSearchProps {}

export const InputSearch = ({}: InputSearchProps) => {
	return (
		<Label className='flex-row items-center border border-input-border-primary rounded-full px-3'>
			<Icon name="MagnifyingGlass" size={20} />
			<Input type="search" placeholder='Search...' className="py-2 px-0 pr-3" />
		</Label>
	)
}
