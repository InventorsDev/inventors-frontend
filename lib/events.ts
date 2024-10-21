export const getEvents = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
	const data = await response.json();
	return data.results;
};

export const getEventById = async (eventId: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/event/${eventId}`
	);
	const data = await response.json();
	return data;
};
