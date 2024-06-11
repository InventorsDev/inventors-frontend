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
];

const page = () => {
	return (
		<div>
			<h1>FAQs</h1>
			<p>Here are some frequently asked questions</p>
		</div>
	);
};

export default page;
