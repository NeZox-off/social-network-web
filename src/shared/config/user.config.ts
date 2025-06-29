import { UserRole, User, OnlineStatusEnum } from '../model'

class UserConfig {
	user: User = {
		id: '1234-abcd-5678-efgh',
		profile: {
			username: 'ivan_ivanov',
			fullname: 'Иван Иванов',
			online_status: OnlineStatusEnum.ONLINE,
			pictureUrl: null,
			bio: 'Люблю программирование и путешествия.',
			friendsCount: 150,
			followersCount: 200,
			postsCount: 75,
			createdDate: '2025-06-29',
		},
		details: {
			role: UserRole.BASIC,
			job: {
				job_title: 'Разработчик',
				job_company: {
					company_name: 'Технологическая Компания',
					company_description:
						'Компания, занимающаяся разработкой программного обеспечения.',
					company_address: {
						street: 'Улица Программирования, 10',
						city: 'Черкассы',
						state: 'Черкасская область',
						country: 'Украина',
					},
				},
				job_workAt: '2023-01-15',
			},
			address: {
				street: 'Улица Примерная, 5',
				city: 'Черкассы',
				state: 'Черкасская область',
				country: 'Украина',
			},
			contactInfo: {
				email: 'ivan@example.com',
				phone: '+380123456789',
				websiteUrls: null,
			},
		},
	}
}

export const { user } = new UserConfig()
