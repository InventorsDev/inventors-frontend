import Image from 'next/image';
import whiteLogo from '@/public/images/white-microsoft.png';
import colorLogo from '@/public/images/color-microsoft.png';

// Sample partners array
const partners = [
	{
		name: 'Microsoft',
	},
	{
		name: 'Microsoft',
	},
	{
		name: 'Microsoft',
	},
	{
		name: 'Microsoft',
	},
	{
		name: 'Microsoft',
	},
];

const Partners = () => {
	return (
		<section className="container dark:bg-darkbg text-white bg-[#F7FDFC] pb-10">
			<div className="">
				<h3 className="text-2xl text-teal-400 mb-2 font-BrittanySignature">
					Partners
				</h3>
				<h2 className="text-3xl font-semibold mb-4">
					<span className="line-through">Companies</span> we work with
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
					{partners.map((partner, index) => (
						<div key={index} className="">
							<Image
								src={whiteLogo}
								alt={partner.name}
								width={200}
								height={200}
								objectFit="contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
