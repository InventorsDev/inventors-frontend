'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { inventorsLeadership } from '@/utils/leads';
import Link from 'next/link';

const MeetLeads = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
		}
	};

	return (
		<section className="bg-darkbg text-white" id="our-team">
			<div className="container py-20">
				<div className="flex justify-between items-center mb-6">
					<h2 className="md:text-3xl text-2xl font-semibold">
						MEET OUR <br />
						LEADERSHIP TEAM
					</h2>
					<div className="flex gap-3">
						<button
							onClick={scrollLeft}
							className="border text-white border-white rounded-full p-2"
						>
							<FaArrowLeft />
						</button>
						<button
							onClick={scrollRight}
							className="border text-white border-white rounded-full p-2"
						>
							<FaArrowRight />
						</button>
					</div>
				</div>

				<div
					ref={scrollRef}
					className="flex overflow-x-auto no-scrollbar scrollbar-hide snap-x snap-mandatory gap-4"
				>
					{inventorsLeadership.map((member) => (
						<div
							key={member.id}
							className="w-screen sm:min-w-[300px] sm:max-w-xs flex-shrink-0 snap-center"
						>
							<Link
								href={'/our-team/testing'}
								className="block w-full h-[360px] relative rounded overflow-hidden"
							>
								<Image
									src={`/images/${member.image}`}
									alt={member.name}
									fill
									className="object-cover w-full h-full"
								/>
							</Link>

							<div className="mt-4 flex justify-between items-start pl-4 sm:pr-4 pr-10">
								<Link href={'/our-team/testing'} className="w-full">
									<div>
										<h3 className="text-xl font-semibold">{member.name}</h3>
										<p className="text-[#AFB4C2]">{member.title}</p>
										<p className="text-yellow-400 italic">{member.position}</p>
									</div>
								</Link>
								<a
									href={member.linkedin}
									aria-label="LinkedIn"
									className="bg-[#007965] text-white rounded-full p-2"
								>
									<FaLinkedinIn />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MeetLeads;
