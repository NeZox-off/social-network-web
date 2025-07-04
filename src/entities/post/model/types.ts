import { User } from '@/shared/model'

export const enum PostType {
	'QUESTIONNAIRE' = 'questionnaire',
}

type PostMap = {
	[PostType.QUESTIONNAIRE]: {
		type: PostType.QUESTIONNAIRE
		description: string
		tags: `#${string}`[]
		questions: Question[]
		post_image: string | null
		date: Date | string | number
	}
}

type PostDetails = PostMap[keyof PostMap]

type Question = {
	title: string
	count: number
	isSelected: boolean
}

type PostUser = Pick<
	User & User['profile'] & User['details'] & User['details']['job'],
	'id' | 'fullname' | 'username' | 'pictureUrl' | 'role' | 'job_title'
>

export type Post = {
	post_id: `${string}-${string}-${string}-${string}`
	user: PostUser
	post_details: PostDetails
	likes: {
		count: number
		isLiked: boolean
	}
	comment: {
		count: number
	}
	share: {
		count: number
	}
	isFavorite: boolean
}
