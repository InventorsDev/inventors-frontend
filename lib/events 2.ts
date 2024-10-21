export const getEvents = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
	const data = await response.json();
	return data;
};
