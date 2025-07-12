import Image from 'next/image';

import LighteningIcon from '@/public/images/lightening-icon.svg';

import person1 from '@/public/images/person-1.webp';
import person2 from '@/public/images/person-2.webp';
import person3 from '@/public/images/person-3.webp';

import Button from '@/app/components/Button';
import { Metadata } from 'next';
import { BsArrowUpRight } from 'react-icons/bs';

export const metadata: Metadata = {
	title: 'FAQs',
	description: 'Frequently asked questions',
};

const faQuestions = [
	{
		question: 'What is Inventors?',
		answer: 'Inventors is a Tech Community where Creativity thrives, Skills grow and Futures are shaped.',
	},
	{
		question: 'Is Inventors only for Students?',
		answer: 'Inventors is meant for everyone — students, graduates, beginners, and professionals alike.',
	},
	{
		question: 'Where did Inventors start?',
		answer: 'Inventors started as a tech community in 2015 at Olusegun Agagu University of Science and Technology and is now open to every tech enthusiast around the world.',
	},
	{
		question: 'Do I pay any fee to join Inventors?',
		answer: 'We do not charge any fee to join our community.',
	},
	{
		question: 'What can I learn on joining Inventors?',
		answer: 'All in-demand tech skills — cybersecurity, frontend and backend development, data analysis, product design, and more.',
	},
	{
		question: 'What do I gain from joining?',
		answer: 'Access to mentorship, guidance, resources, job opportunities, and collaboration.',
	},
];


const page = () => {
	return (
		<div className="container faq-page">
			<section className="text-center pt-24 pb-10">
				<span className="text-sm font-normal uppercase text-[#AFB4C2]">
					Frequently Asked Questions
				</span>
				<h2 className="text-3xl mt-2 font-semibold">
					We know you&apos;ve got some questions
				</h2>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
				{faQuestions.map((faq, index) => (
					<div
						className="faq-item bg-[#003C33] px-6 py-10 rounded-lg relative -z-20"
						key={index}
					>
						<div className="w-10 h-10 bg-[#00241E] rounded-full absolute top-8 right-6 flex items-center justify-center">
							<Image
								src={LighteningIcon}
								alt="Lightening Icon"
								width={30}
								height={30}
								className="p-2"
							/>
						</div>
						<h3 className="text-xl font-bold mb-2 mt-12 text-white">
							{faq.question}
						</h3>
						<p className="text-[#AFB4C2]">{faq.answer}</p>
					</div>
				))}
			</section>

			<section className="lg:mx-5 bg-gradient-to-r from-[#AA7100] to-[#442D00] text-white py-10 my-16 lg:my-24 lg:mb-28 rounded">
				<div className="container mx-auto text-center">
					<div className="flex justify-center -space-x-4 mb-4">
						<Image
							src={person1}
							alt="Person 1"
							className="w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover"
						/>
						<Image
							src={person2}
							alt="Person 2"
							className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-white z-10 object-cover"
						/>
						<Image
							src={person3}
							alt="Person 3"
							className="w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover"
						/>
					</div>
					<h2 className="text-2xl font-semibold">Still have questions?</h2>
					<p className="mt-2">
						Can&apos;t find the answer you&apos;re looking for? Reach out to us
					</p>
					<div className="mt-4">
						<a href="mailto:dinventors@gmail.com">
							<Button
								className="inline-flex gap-2 items-center"
								transparent={true}
								whiteTransparent={true}
							>
								Get in Touch <BsArrowUpRight />
							</Button>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
