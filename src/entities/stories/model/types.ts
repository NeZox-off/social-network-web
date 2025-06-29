import { User } from '@/shared/model/types'

type StoryUser = Pick<
	User & User['profile'],
	'id' | 'fullname' | 'username' | 'pictureUrl'
>

export type Story = {
	stories_id: string
	user: StoryUser
}
