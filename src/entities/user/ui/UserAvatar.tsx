import Image from 'next/image'

interface UserAvatarProps {
	avatar: string | null
	name: string
}

export const UserAvatar = ({ avatar, name }: UserAvatarProps) => {
	return (
		<div>
			{!!avatar ? (
				<Image
					src={avatar}
					alt={'Avatar image is ' + name}
					width={40}
					height={40}
				/>
			) : (
				<div className="w-10 h-10 text-center place-content-center bg-icon-primary/40 font-bold border border-white/10 rounded-full">
					{name.slice(0, 1).toUpperCase()}
				</div>
			)}
		</div>
	)
}
