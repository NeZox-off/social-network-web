import { cn } from '@/shared/lib/utils'
import { OnlineStatusEnum } from '@/shared/model/types'
import Image from 'next/image'

interface UserAvatarProps {
	avatar: string | null
	name: string
	online_status: OnlineStatusEnum
	width: number | `${number}` | undefined
	height: number | `${number}` | undefined
}

export const UserAvatar = ({
	avatar,
	name,
	online_status = OnlineStatusEnum.ONLINE,
	width = 40,
	height = 40,
}: UserAvatarProps) => {
	const status_color = {
		online: 'bg-status-success',
		not_disturb: 'bg-status-error',
	}
	return (
		<div
			className="relative"
			style={{
				width,
				height,
			}}
		>
			{!!avatar ? (
				<Image
					src={avatar}
					alt={'Avatar image is ' + name}
					width={width}
					height={height}
				/>
			) : (
				<div className="text-center min-w-full min-h-full place-content-center bg-icon-primary/40 font-bold border border-white/10 rounded-full">
					{name.slice(0, 1).toUpperCase()}
				</div>
			)}
			{online_status !== OnlineStatusEnum.OFFLINE && (
				<span
					className={cn(
						'absolute bottom-0 right-0 w-3 h-3 rounded-full border border-white',
						status_color[online_status]
					)}
				></span>
			)}
		</div>
	)
}
