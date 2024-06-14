import Button from "../Button";
import coreValueImage from '../../../public/images/core-value-image.png'
import Image from 'next/image'
const CoreValues = () => {

	let coreValuesContent = [
		{ id: 1, title: 'Empathy', description: 'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected' },
		{ id: 2, title: 'Empathy', description: 'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected' },
		{ id: 3, title: 'Empathy', description: 'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected' },
		{ id: 4, title: 'Empathy', description: 'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected' },
		{ id: 5, title: 'Empathy', description: 'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected' },
		{ id: 6, title: 'Empathy', description: 'Guiding our Actions, Understanding Your Needs. At the heart of our core values lies empathy, where we listen, understand, and act with compassion to ensure your experience is truly valued and respected' }
	]
	return (
		<div className="container sm:my-8 my-3">
			<div className="sm:mb-12 mb-4 flex  items-center justify-center  flex-col ">
				<h1 className="text-2xl sm:mb-4 mb-2  font-semibold">our core values</h1>
				<h2 className="sm:text-4xl font-3xl  font-bold">The guiding concepts for us</h2>
			</div>
			<div className="grid sm:grid-cols-3 md:grid-rows-3 sm:grid-rows-2 grid-col-1 sm:gap-12 gap-6 mt-8">
				{coreValuesContent.map((content) => {
					let { id, title, description } = content
					return (
						<div key={id}>
							<Image className="w-8"
								src={coreValueImage}
								alt="Image of the Inventors Leads"
								priority
							/>
							{/* <img src={coreValueImage} alt="" /> */}
							<h1 className="sm:text-[19px] text-[17px] font-bold">{title}</h1>
							<p className="text-left sm:text-[15px] text-[14px]">{description}</p>
						</div>
					)
				})}
			</div>
			<div className="flex justify-center mt-[-80px]">
				<Button text="Join Our Community" href="/get-started" />
			</div>
		</div>
	);
};

export default CoreValues;
