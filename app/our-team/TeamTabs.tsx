'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FaLinkedinIn } from 'react-icons/fa';
import { TeamMember, toSlug } from '@/lib/team';
import MemberAvatar from '@/app/components/MemberAvatar';

type StaticMember = {
	id: number;
	name: string;
	title: string;
	position: string;
	image: string;
	linkedin: string;
	role: string;
};

type Props = {
	founders: StaticMember[];
	leads: TeamMember[];
};

const TeamTabs = ({ founders, leads }: Props) => {
	const [activeTab, setActiveTab] = useState('founders');

	return (
		<div className="py-20 space-y-10">
			<h2 className="text-3xl">
				MEET OUR <br />
				LEADERSHIP TEAM
			</h2>
			<div className="relative flex items-center justify-center w-64 h-16 bg-transparent border-2 border-primary-green rounded-full p-1">
				<div
					className={`absolute w-1/2 h-[90%] bg-primary-green rounded-full transition-transform duration-300 ease-in-out ${
						activeTab === 'founders'
							? 'transform -translate-x-[60px]'
							: 'transform translate-x-[60px]'
					}`}
				></div>
				<button
					onClick={() => setActiveTab('founders')}
					className={`w-1/2 h-full text-center z-10 ${
						activeTab === 'founders' ? 'text-white' : 'text-primary-green'
					}`}
				>
					Our Founders
				</button>
				<button
					onClick={() => setActiveTab('leads')}
					className={`w-1/2 h-full text-center z-10 ${
						activeTab === 'leads' ? 'text-white' : 'text-primary-green'
					}`}
				>
					Our Leads
				</button>
			</div>

			{activeTab === 'founders' && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{founders.map((member) => (
						<div key={member.id}>
							<Image
								src={`/images/${member.image}`}
								alt={member.name}
								width={400}
								height={400}
								className="object-cover h-96 w-full"
							/>
							<div className="mt-4 flex justify-between items-start">
								<div className="min-w-0">
									<h3 className="text-xl font-semibold truncate">{member.name}</h3>
									<p className="text-[#AFB4C2] truncate">{member.title}</p>
									<p className="text-yellow-400 truncate">{member.position}</p>
								</div>
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="bg-[#007965] text-white rounded-full p-2"
								>
									<FaLinkedinIn />
								</a>
							</div>
						</div>
					))}
				</div>
			)}

			{activeTab === 'leads' && (
				<>
					{leads.length === 0 ? (
						<p className="text-[#AFB4C2]">No leads available yet.</p>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
							{leads.map((member) => (
								<div key={member.email}>
									<Link
										href={`/our-team/${toSlug(member.fullName)}`}
										className="w-full block"
									>
										<MemberAvatar
											name={member.fullName}
											profilePic={member.profilePic}
											className="h-96 w-full"
										/>
									</Link>
									<div className="mt-4 flex justify-between items-start">
										<Link
											href={`/our-team/${toSlug(member.fullName)}`}
											className="w-full"
										>
											<div className="min-w-0">
												<h3 className="text-xl font-semibold truncate">
													{member.fullName}
												</h3>
												<p className="text-[#AFB4C2] truncate">{member.primarySkill}</p>
												<p className="text-yellow-400 truncate">{member.role}</p>
											</div>
										</Link>
										{member.socials?.linkedIn && (
											<a
												href={member.socials.linkedIn}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="LinkedIn"
												className="bg-[#007965] text-white rounded-full p-2"
											>
												<FaLinkedinIn />
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default TeamTabs;
