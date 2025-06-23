import { UUID } from '@/shared/model'
import { IconProps } from '@/shared/ui'

type FriendSuggestionsType = {
	id: UUID
	avatar: string | null
	fullname: string
	username: string
}

type EventType = {
	id: string
	title: string
	icon: IconProps['name']
	date: Date | string | number
}

export type { FriendSuggestionsType, EventType }
