import { Post, PostType } from '../'

export const useTotalPostVotes = (post_details: Post['post_details']) => {
	return post_details.type === PostType.QUESTIONNAIRE
		? post_details.questions
				.map((question) => question.count)
				.reduce((prev, current) => prev + current)
		: 0
}
