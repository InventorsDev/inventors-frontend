import Link from 'next/link';
import { notFound } from 'next/navigation';

import { FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsGlobe, BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs';

import {
	getTeamMembers,
	getTeamMemberBySlug,
	toSlug,
	parseTechnologies,
} from '@/lib/team';
import MemberAvatar from '@/app/components/MemberAvatar';

type Props = {
	params: { slug: string };
};

export const generateStaticParams = async () => {
	const members = await getTeamMembers();
	return members.map((m) => ({ slug: toSlug(m.fullName) }));
};

const ProfilePage = async ({ params: { slug } }: Props) => {
	const member = await getTeamMemberBySlug(slug);

	if (!member) notFound();

	const technologies = parseTechnologies(member.technologies ?? []);
	const hasSocials =
		member.socials?.linkedIn ||
		member.socials?.twitter ||
		member.socials?.portfolio ||
		member.socials?.facebook;

	return (
		<div className="container my-14 md:my-20 max-w-4xl">
			<Link
				href="/our-team"
				className="inline-flex items-center gap-2 text-[#AFB4C2] hover:text-primary-green transition-colors text-sm"
			>
				← Back to Team
			</Link>

			{/* Profile header */}
			<div className="mt-8 bg-[#0d1f1b] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
				<MemberAvatar
					name={member.fullName}
					profilePic={member.profilePic}
					className="w-36 h-36 md:w-48 md:h-48 rounded-xl flex-shrink-0"
				/>

				<div className="flex-1 min-w-0">
					<h1 className="text-3xl font-bold">{member.fullName}</h1>

					{member.role && (
						<p className="text-primary-green font-medium mt-1 line-clamp-2">{member.role}</p>
					)}

					{member.company && (
						<p className="text-[#AFB4C2] text-sm mt-0.5">@ {member.company}</p>
					)}

					{member.location && (
						<p className="flex items-center gap-1.5 text-[#AFB4C2] text-sm mt-2">
							<BsGeoAlt className="flex-shrink-0" />
							{member.location}
						</p>
					)}

					{hasSocials && (
						<div className="flex gap-2 mt-5 flex-wrap">
							{member.socials?.linkedIn && (
								<a
									href={member.socials.linkedIn}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="bg-[#007965] text-white rounded-full p-2.5 hover:bg-primary-green transition-colors"
								>
									<FaLinkedinIn size={14} />
								</a>
							)}
							{member.socials?.twitter && (
								<a
									href={member.socials.twitter}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="X / Twitter"
									className="bg-[#007965] text-white rounded-full p-2.5 hover:bg-primary-green transition-colors"
								>
									<FaTwitter size={14} />
								</a>
							)}
							{member.socials?.portfolio && (
								<a
									href={member.socials.portfolio}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Portfolio"
									className="bg-[#007965] text-white rounded-full p-2.5 hover:bg-primary-green transition-colors"
								>
									<BsGlobe size={14} />
								</a>
							)}
							{member.socials?.facebook && (
								<a
									href={member.socials.facebook}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Facebook"
									className="bg-[#007965] text-white rounded-full p-2.5 hover:bg-primary-green transition-colors"
								>
									<FaFacebook size={14} />
								</a>
							)}
						</div>
					)}
				</div>

				{(member.experience ?? 0) > 0 && (
					<div className="text-center bg-[#163028] rounded-xl px-6 py-4 flex-shrink-0">
						<p className="text-3xl font-bold text-primary-green">
							{member.experience}
						</p>
						<p className="text-[#AFB4C2] text-xs uppercase tracking-wider mt-1">
							{member.experience === 1 ? 'Year' : 'Years'} exp.
						</p>
					</div>
				)}
			</div>

			{/* About */}
			{member.bio && (
				<div className="mt-8">
					<h2 className="text-xs font-semibold uppercase tracking-widest text-[#AFB4C2] mb-3">
						About
					</h2>
					<p className="text-[#E0E6EB] leading-relaxed break-words">{member.bio}</p>
				</div>
			)}

			{/* Skills */}
			{(member.primarySkill || member.secondarySkill) && (
				<div className="mt-8">
					<h2 className="text-xs font-semibold uppercase tracking-widest text-[#AFB4C2] mb-3">
						Skills
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{member.primarySkill && (
							<div className="bg-[#0d1f1b] rounded-xl p-4 border border-[#1a3330]">
								<p className="text-[#AFB4C2] text-xs uppercase tracking-wider mb-1">
									Primary
								</p>
								<p className="text-white font-medium">{member.primarySkill}</p>
							</div>
						)}
						{member.secondarySkill && (
							<div className="bg-[#0d1f1b] rounded-xl p-4 border border-[#1a3330]">
								<p className="text-[#AFB4C2] text-xs uppercase tracking-wider mb-1">
									Secondary
								</p>
								<p className="text-white font-medium">{member.secondarySkill}</p>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Technologies */}
			{technologies.length > 0 && (
				<div className="mt-8">
					<h2 className="text-xs font-semibold uppercase tracking-widest text-[#AFB4C2] mb-3">
						Technologies
					</h2>
					<div className="flex flex-wrap gap-2">
						{technologies.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1.5 bg-[#0d1f1b] border border-[#1a3330] text-[#E0E6EB] rounded-full text-sm"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			)}

			{/* Areas of interest */}
			{(member.areasOfInterest?.length ?? 0) > 0 && (
				<div className="mt-8">
					<h2 className="text-xs font-semibold uppercase tracking-widest text-[#AFB4C2] mb-3">
						Areas of Interest
					</h2>
					<div className="flex flex-wrap gap-2">
						{member
							.areasOfInterest!.join(', ')
							.split(/,\s*/)
							.filter(Boolean)
							.map((area) => (
								<span
									key={area}
									className="px-3 py-1.5 bg-[#0d1f1b] border border-[#1a3330] text-[#E0E6EB] rounded-full text-sm"
								>
									{area}
								</span>
							))}
					</div>
				</div>
			)}

			{/* Contact */}
			{(member.email || member.phone) && (
				<div className="mt-8 bg-[#0d1f1b] rounded-2xl p-6 border border-[#1a3330]">
					<h2 className="text-xs font-semibold uppercase tracking-widest text-[#AFB4C2] mb-4">
						Contact
					</h2>
					<div className="space-y-3">
						{member.email && (
							<a
								href={`mailto:${member.email}`}
								className="flex items-center gap-3 text-[#E0E6EB] hover:text-primary-green transition-colors"
							>
								<BsEnvelope className="flex-shrink-0 text-primary-green" />
								{member.email}
							</a>
						)}
						{member.phone && (
							<p className="flex items-center gap-3 text-[#E0E6EB]">
								<BsTelephone className="flex-shrink-0 text-primary-green" />
								{member.phone}
							</p>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
