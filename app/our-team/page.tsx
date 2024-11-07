'use client';

import Image from 'next/image';
import Button from '../components/Button';

import { FaLinkedinIn } from 'react-icons/fa';
import { inventorsLeadership } from '@/utils/leads';

import JoinNewsletter from '@/app/components/lp_sections/JoinNewsletter';
import GetInTouch from '@/app/components/lp_sections/GetInTouch';

import { useState } from 'react';
import Link from 'next/link';

const OurTeam = () => {
	const [activeTab, setActiveTab] = useState('founders');

	return (
		<div>
			<div className=" bg-white w-full text-[#0B0B0B]">
				<div className="container pt-20 pb-16">
					<div className="block md:flex items-center">
						<span>Our Leadership Team - </span>
						<p className="text-[#005B4C] text-xl ml-1">
							Meet the experts behind our success
						</p>
					</div>
					<h1 className="text-3xl md:text-4xl mt-10">
						We create <span className="text-[#005B4C]">experiences</span> that{' '}
						<br />
						are strategic and great.
					</h1>
				</div>
			</div>
			<div className="w-full">
				<Image
					src="/images/inventors-leads.webp"
					alt="Image of the Inventors Leads"
					width={1920}
					height={1080}
					priority
				/>
			</div>
			<div className="bg-[#0B0B0B] w-full">
				<div className="container">
					<div className="block md:flex items-center py-20">
						<div className="basis-2/5 flex justify-end mr-24">
							<Image
								src="/images/arrow-style.png"
								alt="Arrow"
								width={300}
								height={300}
								className="object-contain max-w-full md:block hidden" // Prevent stretching while respecting container width
							/>
						</div>
						<div className="basis-3/5 space-y-8">
							<h2 className="text-3xl">
								Community leaders fostering an inclusive and engaging
								environment
							</h2>
							<p className="text-lg">
								We are a diverse group of passionate individuals dedicated to
								creating an inclusive and engaging environment. Get to know the
								people behind our thriving community. We’re always excited to
								welcome new members. Explore opportunities to get involved and
								become a part of our dynamic and supportive community.
							</p>
							<Button
								text="Join Us"
								href="https://docs.google.com/forms/d/11xLg_QIjU-Qq8_su1w6rptxsEYV65Ny0NCNvlIdahJ0/viewform?edit_requested=true"
							/>
						</div>
					</div>
					<div className="py-20 space-y-10">
						<h2 className="text-3xl">
							MEET OUR <br />
							LEADERSHIP TEAM
						</h2>
						<div className="relative flex items-center justify-center w-64 h-16 bg-transparent border-2 border-primary-green rounded-full p-1">
							{/* Animated background for the active tab */}
							<div
								className={`absolute w-1/2 h-[90%] bg-primary-green rounded-full transition-transform duration-300 ease-in-out ${
									activeTab === 'founders'
										? 'transform -translate-x-[60px]'
										: 'transform translate-x-[60px]'
								}`}
							></div>

							{/* Tab buttons */}
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
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
							{inventorsLeadership
								.filter((member) =>
									activeTab === 'founders'
										? member.role === 'founder'
										: member.role === 'lead'
								)
								.map((member) => (
									<Link
										href={'/our-team/testing'}
										key={member.id}
										className="w-full"
									>
										<Image
											src={`/images/${member.image}`}
											alt={member.name}
											width={400}
											height={400}
											className="object-cover h-96 w-full"
										/>
										<div className="mt-4 flex justify-between items-start">
											<div className="">
												<h3 className="text-xl font-semibold">{member.name}</h3>
												<p className="text-[#AFB4C2]">{member.title}</p>
												<p className="text-yellow-400 italic">
													{member.position}
												</p>
											</div>
											<a
												href={member.linkedin}
												aria-label="LinkedIn"
												className="bg-[#007965] text-white rounded-full p-2"
											>
												<FaLinkedinIn />
											</a>
										</div>
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>
			<JoinNewsletter />
			<GetInTouch />
		</div>
	);
};

export default OurTeam;
