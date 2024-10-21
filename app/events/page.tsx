import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/utils/formatDate';

import { BsArrowUpRight } from 'react-icons/bs';

import { getEvents } from '@/lib/events';
import Button from '../components/Button';

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
	__v: number;
};

// export const revalidate = 60;

const page = async () => {
	const allEvents: Event[] = await getEvents().then((data) => {
		return data?.slice(0, 4);
	});
	return (
		<div className="container py-20">
			<div className="items-start md:items-cente mb-8">
				<h2 className="lg:text-3xl text-xl font-semibold uppercase text-black dark:text-white">
					Take a look at some of our <br /> events
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{allEvents?.map((event: Event) => (
					<div key={event._id} className="bg-dark-green rounded-lg">
						<Image
							src={event.photo}
							alt={event.title}
							width={500}
							height={300}
							className="rounded w-full object-cover"
						/>
						<div className="flex justify-between items-center align-center my-3">
							<h3 className="text-xl font-semibold text-black dark:text-white basis-2/3">
								{event.title}
							</h3>
							<p className="text-gray-400">{formatDate(event.eventDate)}</p>
						</div>
						<p className="mb-4">{event.shortDesc}</p>
						<Link href={`/events/${event._id}`} className="text-primary-green">
							Learn More
							<BsArrowUpRight className="inline-block ml-2" />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
