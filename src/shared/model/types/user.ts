export const enum UserRole {
	'BASIC' = 'Basic Member',
}

export const enum OnlineStatusEnum {
	ONLINE = 'online',
	NOT_DISTURB = 'not_disturb',
	OFFLINE = 'offline',
}

type Address = {
	street: string | null
	city: string | null
	state: string | null
	country: string | null
}

type Company = {
	company_name: string
	company_description: string
	company_address: Address
}

type Job = {
	job_title: string
	job_company: Company | string | null
	job_workAt: Date | string | number | null
}

type ContactInfo = {
	email: string
	phone: string | null
	websiteUrls: string | string[] | null
}

type UserProfile = {
	username: string
	fullname: string
	online_status: OnlineStatusEnum
	pictureUrl: string | null
	bio: string | null
	friendsCount: number
	followersCount: number
	postsCount: number
	createdDate: Date | string | number
}

type UserDetails = {
	role: UserRole.BASIC
	job: Job | null
	address: Address | null
	contactInfo: ContactInfo | null
}

export type User = {
	id: `${string}-${string}-${string}-${string}`
	profile: UserProfile
	details: UserDetails
}
