'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { BsArrowUpRight } from 'react-icons/bs';

import curveShape from '@/public/images/shape-twist.png';

const JoinNewsletter = () => {
	const { theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<section className="relative bg-gradient-to-r from-[#32ECCE] to-[#00241E] dark:from-[#02856F] dark:to-[#005446] text-white py-16 overflow-hidden my-20 rounded mx-4 lg:mx-28">
			{resolvedTheme !== 'dark' ? (
				<div className="lg:block hidden absolute right-0 top-0 h-full w-3/5 bg-[#00241E] rounded-full transform scale-125 translate-x-1/2"></div>
			) : (
				<div className="lg:block hidden absolute right-0 top-28 ">
					<Image
						src={curveShape}
						alt="Leaf"
						objectFit="contain"
						width={250}
						height={250}
					/>
				</div>
			)}
			<div className="relative container mx-auto text-center px-6">
				<h1 className="text-2xl lg:text-4xl font-bold mb-4">
					Join our newsletter
				</h1>
				<p className="text-base lg:text-lg mb-8">
					The newsletter is for you if you appreciate making design based on
					research <br /> and are driven by curiosity.
				</p>
				<div className="flex justify-center items-center text-sm bg-white w-full max-w-[600px] mx-auto p-1 lg:p-2">
					<input
						type="email"
						placeholder="Email Address"
						className="lg:w-full w-auto px-4 py-4 text-gray-700 outline-none focus:outline-none max-w-md bg-white"
					/>
					<button className="bg-primary-green text-white px-6 py-4">
						Subscribe
						<BsArrowUpRight className="inline-block ml-2" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default JoinNewsletter;
