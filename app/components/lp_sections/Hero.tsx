import Button from '../Button';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className=" sm:py-0 mt-4">
			<div className="dark:text-white">
				<div className="container text-center mb-20 lg:mt-24 mt-14">
					<span className="text-sm font-normal uppercase text-[#464646] dark:text-[#AFB4C2]">
						Who we are
					</span>
					<h2 className="text-2xl md:text-3xl lg:text-5xl my-6 lg:my-10 lg:mx-48 mx-4 font-bold">
						We&apos;re a <span className="text-primary-green">technology</span>{' '}
						community focused on growing skills and where we thrive for
						creativity in the real world
					</h2>
					<div className="my-5">
						<Button text="Get Started" href="/get-started" />
					</div>
				</div>
				<div className="w-full">
					<Image
						src="/images/inventors-leads.png"
						alt="Image of the Inventors Leads"
						layout="responsive"
						width={1920}
						height={1080}
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
