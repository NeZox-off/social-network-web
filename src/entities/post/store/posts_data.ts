import { UserRole } from '@/shared/model'
import { PostType, type Post } from '../model'

export const TEST_POSTS: Post[] = [
	{
		post_id: 'abc-def-ghi-jkl',
		user: {
			id: 'mno-pqr-stu-vwx',
			fullname: 'Иван Иванов',
			username: 'ivan_ivanov',
			pictureUrl: '/images/people/Avatar-1.png',
			role: UserRole.BASIC,
			job_title: 'Разработчик',
		},
		post_details: {
			type: PostType.DEFAULT,
			description: 'Это пример публикации о программировании.',
			tags: ['#программирование', '#разработка'],
			post_image: '/images/posts/post-1.jpg',
			date: '2025-06-29',
		},
		likes: {
			count: 100,
			isLiked: true,
		},
		comment: {
			count: 200,
		},
		share: {
			count: 5,
		},
		isFavorite: true,
	},
	{
		post_id: 'stu-vwx-abc-def',
		user: {
			id: 'ghi-jkl-mno-pqr',
			fullname: 'Мария Петрова',
			username: 'maria_pet',
			pictureUrl: null,
			role: UserRole.BASIC,
			job_title: 'Менеджер проектов',
		},
		post_details: {
			type: PostType.QUESTIONNAIRE,
			description: 'Какой ваш любимый язык программирования?',
			tags: ['#опрос', '#программирование'],
			questions: [
				{
					title: 'JavaScript',
					count: 0,
					isSelected: false,
				},
				{
					title: 'Python',
					count: 0,
					isSelected: false,
				},
				{
					title: 'Java',
					count: 0,
					isSelected: false,
				},
			],
			date: '2025-06-29',
		},
		likes: {
			count: 100,
			isLiked: false,
		},
		comment: {
			count: 200,
		},
		share: {
			count: 5,
		},
		isFavorite: false,
	},
	{
		post_id: 'xyz-abc-def-ghi',
		user: {
			id: 'jkl-mno-pqr-stu',
			fullname: 'Алексей Смирнов',
			username: 'alexey_smirnov',
			pictureUrl: null,
			role: UserRole.BASIC,
			job_title: 'Дизайнер',
		},
		post_details: {
			type: PostType.DEFAULT,
			description: null,
			tags: ['#дизайн', '#креатив'],
			post_image: '/images/posts/post-2.jpg',
			date: '2025-06-29',
		},
		likes: {
			count: 100,
			isLiked: false,
		},
		comment: {
			count: 200,
		},
		share: {
			count: 5,
		},
		isFavorite: true,
	},
]
