import { getEventById, getEvents } from '@/lib/events';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils/formatDate';
import { BsArrowUpRight } from 'react-icons/bs';

type Props = {
	params: { eventId: string };
};

export const generateStaticParams = async () => {
	const events = await getEvents();
	if (!events) return [];
	return events.map((event: any) => ({ eventId: event._id }));
};

const page = async ({ params: { eventId } }: Props) => {
	const event = await getEventById(eventId);

	if (!event || event.statusCode === 404) notFound();

	return (
		<div className="container py-20">
			<Link
				href="/events"
				className="inline-block mb-8 px-6 py-2 border border-primary-green text-primary-green rounded hover:bg-primary-green hover:text-white transition-colors"
			>
				← Back to Events
			</Link>

			<Image
				src={event.photo}
				alt={event.title}
				width={1000}
				height={500}
				className="rounded w-full object-cover max-h-[500px]"
			/>

			<div className="mt-8 max-w-3xl">
				<div className="flex flex-wrap gap-4 items-center mb-4">
					<span className="px-3 py-1 bg-[#003C33] text-primary-green rounded-full text-sm uppercase">
						{event.location}
					</span>
					<span className="text-[#AFB4C2] text-sm">
						{formatDate(event.eventDate)}
					</span>
				</div>

				<h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>

				{event.shortDesc && (
					<p className="text-lg text-[#AFB4C2] mb-6 italic">{event.shortDesc}</p>
				)}

				<p className="text-[#E0E6EB] leading-relaxed">{event.description}</p>

				<div className="mt-8 space-y-3 text-[#E0E6EB]">
					<p>
						<b>Hosted by:</b> {event.host}
						{event.coHost?.length > 0 && (
							<span className="text-[#AFB4C2]">
								{' '}
								&amp; {event.coHost.join(', ')}
							</span>
						)}
					</p>
					<p>
						<b>Join via:</b> {event.joinMethod}
					</p>
				</div>

				{event.link && (
					<a
						href={event.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex gap-2 items-center mt-8 px-6 py-3 bg-primary-green text-white rounded hover:opacity-90 transition-opacity"
					>
						Join Event <BsArrowUpRight />
					</a>
				)}
			</div>
		</div>
	);
};

export default page;
