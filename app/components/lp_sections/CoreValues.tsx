import Button from '../Button';

import Image from 'next/image';

const coreValuesContent = [
	{
		id: 1,
		title: 'Empathy',
		description:
			'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 2,
		title: 'Empathy',
		description:
			'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 3,
		title: 'Empathy',
		description:
			'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 4,
		title: 'Empathy',
		description:
			'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 5,
		title: 'Empathy',
		description:
			'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected',
		icon: '/icons/core-value-dummy.png',
	},
	{
		id: 6,
		title: 'Empathy',
		description:
			'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected',
		icon: '/icons/core-value-dummy.png',
	},
];

const CoreValues = () => {
	return (
		<div className="container my-20" id="who-we-are">
			<div className="sm:mb-20 mb-12 flex  items-center justify-center  flex-col ">
				<span className="text-sm font-normal uppercase text-[#464646] dark:text-[#AFB4C2] mb-5">
					Our core values
				</span>
				<h2 className="text-2xl font-bold lg:text-4xl dark:text-white">
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
							<p className="text-[#464646] dark:text-[#CDCED9] font-light">
								{description}
							</p>
						</div>
					);
				})}
			</div>
			<div className="flex justify-center mt-20">
				<Button
					text="Join Our Community"
					transparent={false}
					href="https://docs.google.com/forms/d/11xLg_QIjU-Qq8_su1w6rptxsEYV65Ny0NCNvlIdahJ0/viewform?edit_requested=true"
				/>
			</div>
		</div>
	);
};

export default CoreValues;
