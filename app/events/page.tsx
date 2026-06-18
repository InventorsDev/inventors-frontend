import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/utils/formatDate';
import { BsArrowUpRight } from 'react-icons/bs';
import { getEvents } from '@/lib/events';

type Event = {
	_id: string;
	title: string;
	shortDesc: string;
	description: string;
	host: string;
	coHost: string[];
	location: string;
	photo: string;
	joinMethod: string;
	link: string;
	eventDate: string;
	status: string;
	createdAt: string;
	updatedAt: string;
};

const page = async () => {
	const allEvents: Event[] = (await getEvents()) ?? [];

	return (
		<div className="bg-white">
			<div className="container py-20">
				<div className="items-start md:items-center mb-8">
					<h1 className="lg:text-3xl text-4xl text-primary-green">
						All Events
					</h1>
				</div>

				{allEvents.length === 0 ? (
					<div className="text-center py-20 text-[#555]">
						<p className="text-xl font-medium">No upcoming events at the moment.</p>
						<p className="mt-2 text-[#888]">Check back soon — exciting things are coming!</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{allEvents.map((event: Event) => (
							<div key={event._id} className="bg-dark-green rounded-lg">
								<Image
									src={event.photo}
									alt={event.title}
									width={500}
									height={300}
									className="rounded w-full object-cover"
								/>
								<div className="flex justify-between items-center align-center my-3">
									<h3 className="text-2xl text-[#070707] basis-2/3">
										{event.title}
									</h3>
									<p className="text-[#0B0B0B]">{formatDate(event.eventDate)}</p>
								</div>
								<Link
									href={`/events/${event._id}`}
									className="text-primary-green"
								>
									Learn More
									<BsArrowUpRight className="inline-block ml-2" />
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default page;
