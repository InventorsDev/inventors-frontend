'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { BsArrowUpRight } from 'react-icons/bs';

import curveShape from '@/public/images/shape-twist.png';

import { joinNewsletter } from '@/actions/joinNewsletter';

const JoinNewsletter = () => {
	const { theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const [email, setEmail] = useState('');
	const [response, setResponse] = useState({ status: '' });

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		// Assuming joinNewsletter is an async server action
		try {
			const res = await joinNewsletter(formData);
			setResponse(res);
			console.log(res);

			setEmail('');

			// Show success message
		} catch (error) {
			console.error('Failed to subscribe:', error);
		}
	};

	return (
		<section className="container">
			<div className=" relative bg-gradient-to-r from-[#32ECCE] to-[#00241E] dark:from-[#02856F] dark:to-[#005446] text-white py-16 overflow-hidden my-20 rounded">
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
					<div className="text-sm bg-white w-full max-w-[600px] mx-auto p-1 lg:p-2">
						{response.status === 'subscribed' ? (
							<p className="text-green-500 text-center">
								Thank you for subscribing!
							</p>
						) : (
							<form onSubmit={handleSubmit} className="flex w-full">
								<input
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email Address"
									className="lg:w-full w-auto px-4 py-4 text-gray-700 outline-none focus:outline-none max-w-md bg-white basis-2/3"
								/>
								<button
									className="bg-primary-green text-white px-6 py-4 basis-1/3"
									type="submit"
								>
									Subscribe
									<BsArrowUpRight className="inline-block ml-2" />
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default JoinNewsletter;
