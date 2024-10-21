import { getEventById, getEvents } from '@/lib/events';
import Image from 'next/image';

type Props = {
	params: { eventId: string };
};

export const generateStaticParams = async () => {
	const events = await getEvents();

	if (!events) return [];

	return events.map((event: any) => ({
		params: { eventId: event._id },
	}));
};

const page = async ({ params: { eventId } }: Props) => {
	const event = await getEventById(eventId);

	return (
		<div className="container py-20">
			<Image
				src={event.photo}
				alt={event.title}
				width={1000}
				height={600}
				className="rounded w-full object-cover"
			/>
			<h1>{event.title}</h1>
			<p>{event.description}</p>
		</div>
	);
};

export default page;
