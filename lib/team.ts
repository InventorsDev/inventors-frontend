export type TeamMember = {
	fullName: string;
	profilePic?: string;
	bio?: string;
	company?: string;
	role?: string;
	experience?: number;
	primarySkill?: string;
	secondarySkill?: string;
	technologies?: string[];
	email?: string;
	phone?: string;
	socials?: {
		portfolio?: string;
		twitter?: string;
		linkedIn?: string;
		facebook?: string;
	};
	location?: string;
	areasOfInterest?: string[];
};

export function toSlug(name: string): string {
	return name
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

export function parseTechnologies(techs: string[]): string[] {
	return techs
		.flatMap((t) => t.split(/,\s*|\s+/))
		.map((t) => t.trim())
		.filter(Boolean);
}

export const getTeamMembers = async (): Promise<TeamMember[]> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/our-team`,
			{ next: { revalidate: 3600 } }
		);
		if (!response.ok) return [];
		const data = await response.json();
		const members: TeamMember[] = Array.isArray(data)
			? data
			: (data.results ?? []);
		return members.filter((m) => m.fullName?.trim());
	} catch {
		return [];
	}
};

export const getTeamMemberBySlug = async (
	slug: string
): Promise<TeamMember | null> => {
	const members = await getTeamMembers();
	return members.find((m) => toSlug(m.fullName) === slug) ?? null;
};
