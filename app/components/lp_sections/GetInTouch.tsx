import Button from '../Button';
import { BsArrowUpRight } from 'react-icons/bs';

const GetInTouch = () => {
	return (
		<div
			className="flex justify-center items-center flex-col gap-6 py-12"
			id="contact-us"
		>
			<h2 className="text-2xl font-bold lg:text-4xl text-white">
				Let&apos;s solve problems together
			</h2>
			<p className="text-base font-base lg:text-lg text-white">
				Our creativity and learning brings us together
			</p>
			<a href="mailto:dinventors@gmail.com">
				<Button
					className="flex gap-2 items-center"
					transparent={true}
					greenTransparent={true}
				>
					Get in Touch <BsArrowUpRight />
				</Button>
			</a>
		</div>
	);
};

export default GetInTouch;
