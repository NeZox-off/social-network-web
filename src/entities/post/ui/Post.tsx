'use client'
import { UserAvatar } from '@/entities/user'
import { OnlineStatusEnum } from '@/shared/model'
import type { Post as PostData } from '../model'
import { Button, Icon } from '@/shared/ui'
import { PostContent } from './PostContent'

interface PostProps {
	data: PostData
}

export const Post = ({ data }: PostProps) => {
	return (
		<section className="border border-zumthor-100 rounded-3xl bg-white shadow shadow-big-stone-950/10">
			<header className="flex justify-between p-5 border-b border-b-zumthor-100">
				<div className='flex items-center gap-3'>
					<UserAvatar
						online_status={OnlineStatusEnum.OFFLINE}
						name="T"
						avatar={data.user.pictureUrl}
						width={40}
						height={40}
					/>
					<div>
						<h3 className='font-bold text-sm'>{data.user.fullname}</h3>
						<p className='text-sm text-fiord-700'>{[data.user.role, data.user.job_title].join(', ')}</p>
					</div>
				</div>
				<Button className='text-link-water-200 rounded-full p-2 hover:bg-zumthor-100 hover:text-blue-violet-600'>
					<Icon name="DotsThreeVertical" size={20} weight='bold' />
				</Button>
			</header>
			<PostContent post={data} />
		</section>
	)
}
