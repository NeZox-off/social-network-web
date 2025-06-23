export enum UserRoleEnum {
	'BASIC' = 'Basic Member',
}

export enum OnlineStatusEnum {
	ONLINE = 'online',
	NOT_DISTURB = 'not_disturb',
	OFFLINE = 'offline',
}

export type UserType = {
	fullname: string
	role: UserRoleEnum.BASIC
	avatar: string | null
}
