import Button from '../Button';

import Image from 'next/image';

import { BsArrowUpRight } from 'react-icons/bs';

const coreValuesContent = [
	{
		id: 1,
		title: 'Empathy',
		description:
			'We listen, understand, and create with people in mind. We believe meaningful technology starts with understanding the problems people actually face.',
		icon: '/icons/love.svg',
	},
	{
		id: 2,
		title: 'Learning',
		description:
			'We stay curious and continuously develop our skills by learning from one another, experimenting, and sharing knowledge',
		icon: '/icons/learn.svg',
	},
	{
		id: 3,
		title: 'Collaboration',
		description:
			'Great ideas rarely happen in isolation. We work together, share perspectives, and create an environment where everyone can contribute.',
		icon: '/icons/award.svg',
	},
	{
		id: 4,
		title: 'Innovation',
		description:
			'We encourage people to question existing approaches, explore new ideas, and turn creative thinking into practical solutions.',
		icon: '/icons/code.svg',
	},
	{
		id: 5,
		title: 'Impact',
		description:
			'Technology is most valuable when it solves real problems. We focus on creating solutions and opportunities that make a meaningful difference.',
		icon: '/icons/graph.svg',
	},
];

const CoreValues = () => {
	return (
		<div className="container my-20" id="who-we-are">
			<div className="sm:mb-20 mb-12 flex  items-center justify-center  flex-col ">
				<span className="text-sm font-normal uppercase text-[#AFB4C2] mb-5">
					Our core values
				</span>
				<h2 className="text-2xl font-bold lg:text-4xl text-white">
					The guiding concepts for us
				</h2>
			</div>
			<div className="grid sm:grid-cols-3 grid-col-1 sm:gap-20 gap-16">
				{coreValuesContent.map((content) => {
					let { id, title, description, icon } = content;
					return (
						<div key={id}>
							<Image
								src={icon}
								alt="Image of the Inventors Leads"
								width={30}
								height={30}
								priority
							/>
							<h1 className="text-xl font-bold mt-5 mb-3">{title}</h1>
							<p className="text-[#CDCED9] font-light">{description}</p>
						</div>
					);
				})}
			</div>
			<div className="flex justify-center mt-20">
				<a href="https://docs.google.com/forms/d/11xLg_QIjU-Qq8_su1w6rptxsEYV65Ny0NCNvlIdahJ0/viewform?edit_requested=true">
					<Button className="flex gap-2 items-center">
						Join Our Community <BsArrowUpRight />
					</Button>
				</a>
			</div>
		</div>
	);
};

export default CoreValues;
