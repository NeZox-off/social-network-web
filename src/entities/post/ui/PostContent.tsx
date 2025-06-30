import Link from 'next/link'
import { Post, PostType } from '../model'
import Image from 'next/image'
import { PostSocialInteractions } from './PostSocialInteractions'
import { Icon, Input } from '@/shared/ui'
import { cn } from '@/shared/lib'

interface PostContentProps {
	post: Post
}

/* 

function percentOfVotes(total, counts) {
  const result = [];
  for (const count of counts) {
    result.push(((count / total) * 100).toFixed(2))
  }
  return result
}

*/

export const PostContent = ({ post }: PostContentProps) => {
	const totalVotes =
		post.post_details.type === PostType.QUESTIONNAIRE
			? post.post_details.questions
					.map((question) => question.count)
					.reduce((prev, current) => prev + current)
			: 0

		const format = new Intl.NumberFormat().format;

	return (
		<div className="p-5 space-y-4">
			<div className="space-y-4">
				{!!post.post_details.description && post.post_details.tags.length !== 0 && (
					<p className="text-sm font-normal">
						{post.post_details.description}
						{post.post_details.tags.map((tag) => (
							<Link key={tag} href={`/tags?=${tag}`} className="text-blue-violet-600">
								{tag}{' '}
							</Link>
						))}
					</p>
				)}
				{post.post_details.type === PostType.DEFAULT ? (
					post.post_details.post_image && (
						<div className="w-full h-80 relative rounded-2xl bg-zumthor-100">
							<Image
								src={post.post_details.post_image}
								layout="fill"
								className="rounded-2xl object-contain object-center"
								alt={`Post with ${post.post_details.description}`}
							/>
						</div>
					)
				) : (
					<div className="p-4 space-y-4 border border-zumthor-100 rounded-3xl flex flex-col gap-2">
						{post.post_details.questions.map((question) => {
							const percent = +((question.count / totalVotes) * 100).toFixed(2)

							return (
								<div
									key={question.title}
									className="flex items-center justify-between border border-zumthor-100 rounded-lg p-2 relative"
								>
									<div
										className={cn(
											'absolute h-full top-0 left-0 z-0 border rounded-lg transition-all duration-500',
											question.isSelected
												? 'bg-zircon-200 border-periwinkle-300'
												: 'bg-link-water-100 border-periwinkle-100'
										)}
										style={{ width: `${percent}%` }}
									></div>
									<Input
										type="checkbox"
										className="-translate-x-full absolute pointer-events-none opacity-0 m-0 h-10 w-4"
									/>
									<div className="flex items-center relative z-1">
										<div className="min-w-16 pr-3">
											<p className="font-bold text-sm">{percent}%</p>
										</div>
										<div className="flex items-center gap-2">
											<p className="text-fiord-700 font-medium">{question.title}</p>
											{question.isSelected && (
												<Icon
													name="CheckCircle"
													className="text-blue-violet-600"
													weight="bold"
													size={20}
												/>
											)}
										</div>
									</div>
									<span className="text-rock-blue-500 text-sm z-1">
										{format(question.count)}
									</span>
								</div>
							)
						})}
						<p className="text-sm font-medium text-fiord-700">
							{post.post_details.date.toString()} -{' '}
							{format(totalVotes)} Total votes
						</p>
					</div>
				)}
			</div>
			<PostSocialInteractions post={post} />
		</div>
	)
}
