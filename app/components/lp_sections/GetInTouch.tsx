import Button from "../Button";

const GetInTouch = () => {
	return (
		<div className="flex justify-center items-center flex-col gap-6 py-12">
			<h1 className="text-xl font-bold sm:text-4xl dark:text-white">Let&apos;s solve problems together</h1>
			<h3 className="text-xs sm:text-lg dark:text-white">Our creativity and learning brings us together</h3>
			<div className="border border-green-400 rounded-sm transition ease-out duration-300 hover:scale-105">
				<Button text="Get in Touch" arrow = {true} bgColor="" navBtn={false} textColor="black" href="#"/>
			</div>
		</div>
	);
};

export default GetInTouch;
