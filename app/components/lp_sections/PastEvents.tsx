import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';
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
	__v: number;
};

const PastEvents = async () => {
	const latestEvents: Event[] = await getEvents().then((data) => {
		return data?.slice(0, 4);
	});

	return (
		<section className="container bg-dark-green text-white py-20">
			<div className="flex justify-between items-start md:items-cente mb-8 gap-4">
				<h2 className="lg:text-3xl text-xl font-semibold uppercase text-white">
					Some of our upcoming and <br /> past events
				</h2>
				<Link href="/events">
					<Button
						className="flex gap-2 items-center"
						transparent={true}
						greenTransparent={true}
					>
						View all events <BsArrowUpRight />
					</Button>
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{latestEvents?.map((event: Event) => (
					<div key={event._id} className="bg-dark-green rounded-lg">
						<Image
							src={event.photo}
							alt={event.title}
							width={500}
							height={300}
							className="rounded w-full object-cover"
						/>
						<div className="flex justify-between items-center align-center my-3">
							<h3 className="text-2xl text-white basis-2/3">{event.title}</h3>
							<p className="text-gray-400 ">{formatDate(event.eventDate)}</p>
						</div>
						<Link href={`/events/${event._id}`} className="text-primary-green">
							Learn More
							<BsArrowUpRight className="inline-block ml-2" />
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default PastEvents;
