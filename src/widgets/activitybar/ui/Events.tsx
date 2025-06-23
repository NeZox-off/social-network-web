'use client'
import { Button, Icon } from '@/shared/ui'
import { TEST_EVENTS } from '../store/constants'

interface EventsProps {}

export const Events = ({}: EventsProps) => {
	return (
		<div className="space-y-6">
			<div className="flex justify-between">
				<h2 className="text-lg text-primary font-bold">Upcoming Events</h2>
				<Button className='text-[#CBD5E1]'>
					<Icon name="DotsThreeVertical" size={24} weight="bold" />
				</Button>
			</div>
			<ul className="flex flex-col gap-1">
				{TEST_EVENTS.map((event) => (
					<li
						key={event.id}
						className="py-4 flex items-center gap-3 justify-between border-b-2 border-b-white-light"
					>
						<div className="flex items-center max-w-2xs gap-3">
							<div className="bg-[#EEF2FF] rounded-full p-2.5">
								<Icon name={event.icon} size={20} weight="bold" className='text-secondary' />
							</div>
							<div>
								<p className="text-muted font-bold text-sm transition-colors duration-150 hover:text-primary/90">
									{event.title}
								</p>
								<p className="text-muted text-sm">{event.date.toString()}</p>
							</div>
						</div>
						<Button className="rounded-full p-2 text-[#94A3B8] hover:bg-counter/20 hover:text-secondary">
							<Icon name="Bell" size={20} weight='bold' />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}
