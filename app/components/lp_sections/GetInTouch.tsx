import Button from '../Button';

const GetInTouch = () => {
	return (
		<div
			className="flex justify-center items-center flex-col gap-6 py-12"
			id="contact-us"
		>
			<h2 className="text-2xl font-bold lg:text-4xl dark:text-white">
				Let&apos;s solve problems together
			</h2>
			<p className="text-base font-base lg:text-lg dark:text-white">
				Our creativity and learning brings us together
			</p>
			<Button
				text="Get in Touch"
				transparent={true}
				greenTransparent={true}
				href="mailto:dinventors@gmail.com"
			/>
		</div>
	);
};

export default GetInTouch;
