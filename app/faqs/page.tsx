import Image from 'next/image';

import LighteningIcon from '@/public/images/lightening-icon.svg';

import person1 from '@/public/images/person-1.jpeg';
import person2 from '@/public/images/person-2.jpeg';
import person3 from '@/public/images/person-3.jpeg';

import Button from '@/app/components/Button';

const faQuestions = [
	{
		question: 'What is your return policy?',
		answer:
			'Our return policy is 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
	},
	{
		question: 'Do you ship internationally?',
		answer:
			'Yes, we ship internationally. Shipping costs will apply, and will be added at checkout.',
	},
	{
		question: 'What is your warranty policy?',
		answer:
			'Our warranty policy is 1 year. If 1 year has gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
	},
	{
		question: 'What payment methods do you accept?',
		answer:
			'We accept all major credit cards, PayPal, and Google Pay. We also accept payment plans through Klarna.',
	},
	{
		question: 'How do I track my order?',
		answer:
			'You will receive an email with your tracking number once your order has shipped. If you have an account, you can also track your order by logging in and viewing your order history.',
	},
	{
		question: 'Can I change my order?',
		answer:
			'If you need to change your order, please contact us immediately. We usually process orders within 2-4 hours, and once we have processed your order, we will be unable to make any changes.',
	},
];

const page = () => {
	return (
		<div className="container faq-page">
			<section className="text-center pt-24 pb-10">
				<span className="text-sm font-normal uppercase text-[#464646] dark:text-[#AFB4C2]">
					Frequently Asked Questions
				</span>
				<h2 className="text-3xl mt-2 font-semibold">
					We know you&apos;ve got some questions
				</h2>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
				{faQuestions.map((faq, index) => (
					<div
						className="faq-item bg-[#F3FCFA] dark:bg-[#003C33] px-6 py-10 rounded-lg relative"
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
						<h3 className="text-xl font-bold mb-2 mt-12 text-[#1D1E2C] dark:text-white">
							{faq.question}
						</h3>
						<p className="text-[#575A65] dark:text-[#AFB4C2]">{faq.answer}</p>
					</div>
				))}
			</section>

			<section className="mx-5 bg-gradient-to-r from-[#AA7100] to-[#442D00] text-white py-10 my-10 rounded">
				<div className="container mx-auto text-center">
					<div className="flex justify-center -space-x-4 mb-4">
						<Image
							src={person1}
							alt="Person 1"
							className="w-14 h-14 rounded-full object-cover"
						/>
						<Image
							src={person2}
							alt="Person 2"
							className="w-14 h-14 rounded-full border-2 border-white z-10 object-cover"
						/>
						<Image
							src={person3}
							alt="Person 3"
							className="w-14 h-14 rounded-full object-cover"
						/>
					</div>
					<h2 className="text-2xl font-semibold">Still have questions?</h2>
					<p className="mt-2">
						Can&apos;t find the answer you&apos;re looking for? Reach out to us
					</p>
					<div className="mt-4">
						<Button
							text="Get in Touch"
							arrow={true}
							textColor="white"
							transparent={true}
							borderColor="white"
							href="#"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
