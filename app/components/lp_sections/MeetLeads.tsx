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
			scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
		}
	};

	return (
		<section className="bg-darkbg text-white" id="our-team">
			<div className="container py-20 ">
				<div className="flex justify-between items-center">
					<h2 className="text-3xl font-semibold mb-6">
						MEET OUR <br />
						LEADERSHIP TEAM
					</h2>
					<div className="flex gap-3">
						<button
							onClick={scrollLeft}
							className="border-[1px] text-white border-white rounded-full p-2"
						>
							<FaArrowLeft className="font-extralight" />
						</button>
						<button
							onClick={scrollRight}
							className="border-[1px] text-white border-white rounded-full p-2"
						>
							<FaArrowRight className="font-base" />
						</button>
					</div>
				</div>
				<div
					ref={scrollRef}
					className="flex overflow-x-auto no-scrollbar scrollbar-hide gap-8"
				>
					{inventorsLeadership.map((member) => (
						<div key={member.id} className="min-w-[300px] flex-shrink-0">
							<Link href={'/our-team/testing'} className="w-full">
								<Image
									src={`/images/${member.image}`}
									alt={member.name}
									width={300}
									height={400}
									className="object-cover h-80"
								/>
							</Link>
							<div className="mt-4 flex justify-between items-start">
								<Link href={'/our-team/testing'} className="w-full">
									<div className="">
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
