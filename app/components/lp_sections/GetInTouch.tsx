import Button from '../Button';
import { BsArrowUpRight } from 'react-icons/bs';

const GetInTouch = () => {
	return (
		<div
			className="flex justify-center items-center flex-col gap-6 py-12"
			id="contact-us"
		>
			<h2 className="text-2xl font-bold lg:text-4xl text-white">
				Have an idea? Let&apos;s build it together.
			</h2>
			<p className="text-base text-center font-base lg:text-lg text-white">
				Whether you&apos;re learning your first technical skill, working on a project, or looking for people 
				<br />to build with, there&apos;s a place for you in the Inventors Community.
			</p>
			<a href="mailto:dinventors@gmail.com">
				<Button
					className="flex gap-2 items-center"
					transparent={true}
					greenTransparent={true}
				>
					Contact Us <BsArrowUpRight />
				</Button>
			</a>
		</div>
	);
};

export default GetInTouch;
