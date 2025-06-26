'use client'
import { Button, Icon } from '@/shared/ui'
import { TEST_EVENTS } from '../store/constants'

interface EventsProps {}

export const Events = ({}: EventsProps) => {
	return (
		<div className="space-y-6">
			<div className="flex justify-between">
				<h2 className="text-lg text-big-stone-950 font-bold">Upcoming Events</h2>
				<Button className="text-link-water-200">
					<Icon name="DotsThreeVertical" size={24} weight="bold" />
				</Button>
			</div>
			<ul className="flex flex-col gap-1">
				{TEST_EVENTS.map((event) => (
					<li
						key={event.id}
						className="py-4 flex items-center gap-3 justify-between border-b-2 border-b-zumthor-100"
					>
						<div className="flex items-center max-w-2xs gap-3">
							<div className="bg-zircon-50 rounded-full p-2.5">
								<Icon
									name={event.icon}
									size={20}
									weight="bold"
									className="text-blue-violet-600"
								/>
							</div>
							<div>
								<p className="text-fiord-700 font-bold text-sm transition-colors duration-150 hover:text-fiord-800">
									{event.title}
								</p>
								<p className="text-muted text-sm">{event.date.toString()}</p>
							</div>
						</div>
						<Button className="rounded-full p-2 text-rock-blue-500 hover:bg-zumthor-100 hover:text-blue-violet-600">
							<Icon name="Bell" size={20} weight="bold" />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}
