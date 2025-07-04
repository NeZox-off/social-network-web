import { cn } from '@/shared/lib'
import { Icon, Input } from '@/shared/ui'
import { Post, PostType, useTotalPostVotes } from '../model'
import { useEffect, useState } from 'react'

interface QuestionPostProps {
	post_details: Post['post_details']
}

export const QuestionPost = ({ post_details }: QuestionPostProps) => {
	const [totalVotes, setTotalVotes] = useState(0)
	const counts = useTotalPostVotes(post_details)
	useEffect(() => {
		setTotalVotes(counts)
	}, [counts])

	const format = new Intl.NumberFormat('en-US', {
		style: 'decimal',
	}).format

	return (
		post_details.type === PostType.QUESTIONNAIRE && (
			<div className="p-4 space-y-4 border border-zumthor-100 rounded-3xl flex flex-col gap-2">
				{post_details.questions.map((question) => {
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
					{post_details.date.toString()} - {format(totalVotes)} Total votes
				</p>
			</div>
		)
	)
}
