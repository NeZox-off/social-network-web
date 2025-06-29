import { cn } from '@/shared/lib/utils'
import { OnlineStatusEnum } from '@/shared/model/types'
import Image from 'next/image'

interface UserAvatarProps {
	avatar: string | null
	name: string
	online_status: OnlineStatusEnum
	width: number | `${number}` | undefined
	height: number | `${number}` | undefined
	className?: string | undefined
}

export const UserAvatar = ({
	avatar,
	name,
	online_status = OnlineStatusEnum.ONLINE,
	width = 40,
	height = 40,
	className,
}: UserAvatarProps) => {
	const status_color = {
		online: 'bg-status-success',
		not_disturb: 'bg-status-error',
	}
	return (
		<div
			className="relative rounded-full"
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
					className='rounded-full'
				/>
			) : (
				<div
					className={cn(
						'text-center min-w-full min-h-full place-content-center bg-rock-blue-200 font-bold border border-white/10 rounded-full',
						className
					)}
				>
					{name.slice(0, 1).toUpperCase()}
				</div>
			)}
			{online_status !== OnlineStatusEnum.OFFLINE && (
				<span
					className={cn(
						'absolute bottom-0 right-0 w-3 h-3	 border border-white',
						status_color[online_status]
					)}
				></span>
			)}
		</div>
	)
}
