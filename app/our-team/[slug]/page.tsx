import Image from 'next/image';
import Button from '@/app/components/Button';

const ProfileCard = () => {
	return (
		<div className="container my-14 md:my-20">
			<div className="w-full md:w-[70%] mx-auto">
				<Button>Go Back</Button>
				<div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-10">
					{/* Profile Image */}
					<Image
						src="/images/juwon.webp" // Replace with your image path
						alt="Kelvin Doe"
						width={200}
						height={200}
						className="rounded object-cover"
					/>

					{/* Personal Information */}
					<div>
						<h2 className="text-2xl mb-4">
							Kelvin Doe{' '}
							<span className="text-sm text-[#F9FAFC]">
								Software Engineer @{' '}
								<span className="text-green-400">Microsoft</span>
							</span>
						</h2>
						<div className="text-[#E0E6EB] flex flex-col md:flex-row">
							<div className="space-y-1">
								<p>
									<b>Email:</b> kelvindoe@gmail.com
								</p>
								<p>
									<b>Phone number:</b> +234 802 845 8888
								</p>
								<p>
									<b>Location:</b> Lagos, Nigeria
								</p>
								<p>
									<b>Areas of interest:</b> UI design, product design
								</p>
							</div>
							<div className="border-l border-[#E0E6EB] mx-8 h-20 hidden md:block"></div>
							<div className="space-y-1">
								<p>
									<b>Experience:</b> 2 years
								</p>
								<p>
									<b>Primary skill:</b> Software engineer
								</p>
								<p>
									<b>Secondary skill:</b> Data Analyst
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bio/Description */}
				<div className="mt-10">
					<h3 className=" mb-2 uppercase">Bio/Short Description</h3>
					<p className="italic">
						I’m a self-taught developer with 6 years of experience building
						amazing digital products that solve problems. I have a strong
						background in creating user-centered design solutions and bringing
						innovative ideas to life.
					</p>
				</div>

				{/* Technologies/Tools */}
				<div className="mt-8">
					<h3 className=" mb-2 uppercase">Technologies/Tools</h3>
					<div className="flex flex-wrap gap-3">
						{[
							'React JS',
							'Micro',
							'ClickUp',
							'Java',
							'C++',
							'HTML',
							'CSS',
							'Vue JS',
						].map((tool) => (
							<span
								key={tool}
								className="p-4 bg-[#B5B5B5] text-[#464646] rounded-full text-sm"
							>
								{tool}
							</span>
						))}
					</div>
				</div>

				{/* Contact Info */}
				<div className="mt-8">
					<h3 className="mb-2 uppercase">Contact Info</h3>
					<ul className="text-[#909090] italic space-y-2">
						<li>
							Skill Profile URL:{' '}
							<a href="https://thisisurl.com" className="text-[#E0E6EB]">
								https://thisisurl.com
							</a>
						</li>
						<li>
							Personal website/Portfolio:{' '}
							<a href="https://thisisurl.com" className="text-[#E0E6EB]">
								https://thisisurl.com
							</a>
						</li>
						<li>
							X (Twitter):{' '}
							<a href="https://thisisurl.com" className="text-[#E0E6EB]">
								https://thisisurl.com
							</a>
						</li>
						<li>
							LinkedIn:{' '}
							<a href="https://thisisurl.com" className="text-[#E0E6EB]">
								https://thisisurl.com
							</a>
						</li>
						<li>
							Facebook:{' '}
							<a href="https://thisisurl.com" className="text-[#E0E6EB]">
								https://thisisurl.com
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
