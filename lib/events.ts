export const getEvents = async () => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/event`,
			{ next: { revalidate: 60 } }
		);
		if (!response.ok) return [];
		const data = await response.json();
		return data.results ?? [];
	} catch {
		return [];
	}
};

export const getEventById = async (eventId: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/event/${eventId}`,
			{ next: { revalidate: 60 } }
		);
		if (!response.ok) return null;
		return await response.json();
	} catch {
		return null;
	}
};
