import { UserRoleEnum, UserType } from '../model/types'

class UserConfig {
	user: UserType = {
		fullname: 'Maksym Poliakov',
		role: UserRoleEnum.BASIC,
		avatar: null,
	}
}

export const { user } = new UserConfig()
