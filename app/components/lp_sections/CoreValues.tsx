import Button from '../Button';
import Image from 'next/image';

import { BsArrowUpRight } from 'react-icons/bs';

const coreValuesContent = [
	{
		id: 1,
		title: 'Empowerment Through Knowledge',
		description:
			'We believe in the power of learning and growth. By sharing skills, resources, and opportunities, we equip every member to reach their full potential and contribute meaningfully to the tech ecosystem.',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 2,
		title: 'Mentorship and Multiplication',
		description:
			' We don’t just build talent, we build mentors. Every member is encouraged to learn, lead, and pass on knowledge, creating a cycle of continuous impact across generations.',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 3,
		title: 'Innovation with Purpose',
		description:
			' We encourage curiosity and bold thinking, but always with impact in mind. Our ideas aim to solve real problems and create lasting value in our communities.',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 4,
		title: 'Collaboration Over Competition',
		description:
			'We grow stronger together. We foster a culture of collaboration, support, and open sharing, where everyone’s voice is heard and contributions are valued.',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 5,
		title: 'Integrity and Accountability',
		description:
			' We hold ourselves to high standards. Honesty, responsibility, and respect guide how we work, lead, and represent our community.',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 6,
		title: 'Inclusivity and Diversity',
		description:
			' We welcome individuals from all backgrounds and experiences. Diversity fuels creativity, and inclusivity ensures that everyone has the chance to thrive.',
		icon: '/icons/core-value-dummy.png',
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
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 sm:gap-20 gap-16">
				{coreValuesContent.map((content) => {
					let { id, title, description, icon } = content;
					return (
						<div key={id}>
							<Image
								src={icon}
								alt="icon"
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
