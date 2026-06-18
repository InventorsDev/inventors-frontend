import Image from 'next/image';
import Button from '@/app/components/Button';
import Link from 'next/link';

import { BsArrowUpRight } from 'react-icons/bs';

import { inventorsLeadership } from '@/utils/leads';
import { getTeamMembers } from '@/lib/team';

import TeamTabs from './TeamTabs';
import JoinNewsletter from '@/app/components/lp_sections/JoinNewsletter';
import GetInTouch from '@/app/components/lp_sections/GetInTouch';

const OurTeam = async () => {
	const founders = inventorsLeadership.filter((m) => m.role === 'founder');
	const leads = await getTeamMembers();

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
								className="object-contain max-w-full md:block hidden"
							/>
						</div>
						<div className="basis-3/5 space-y-8">
							<h2 className="text-3xl">
								Community leaders fostering an inclusive and engaging environment
							</h2>
							<p className="text-lg">
								We are a diverse group of passionate individuals dedicated to
								creating an inclusive and engaging environment. Get to know the
								people behind our thriving community. We&apos;re always excited
								to welcome new members. Explore opportunities to get involved and
								become a part of our dynamic and supportive community.
							</p>
							<a href="https://docs.google.com/forms/d/11xLg_QIjU-Qq8_su1w6rptxsEYV65Ny0NCNvlIdahJ0/viewform?edit_requested=true">
								<Button className="flex gap-2 items-center mt-8">
									Join Us <BsArrowUpRight />
								</Button>
							</a>
						</div>
					</div>
					<TeamTabs founders={founders} leads={leads} />
				</div>
			</div>
			<JoinNewsletter />
			<GetInTouch />
		</div>
	);
};

export default OurTeam;
