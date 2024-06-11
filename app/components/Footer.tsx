'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import lightLogo from '@/public/images/light-logo.png';
import darkLogo from '@/public/images/dark-logo.png';

import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	const { theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<footer className="border-t border-[#005B4C] mt-10">
			<div className="container flex py-24 flex-col md:flex-row">
				<div className="footer-column basis-1/4 mr-10 mb-10 md:mb-0">
					<Image
						src={resolvedTheme === 'dark' ? darkLogo : lightLogo}
						alt="Inventors"
						height={40}
						width={40}
						className="mb-10"
					/>
					<p>
						Inventors: Where Creativity Thrives, Skills Grow, and Futures Are
						Shaped
					</p>
				</div>
				<div className="basis-3/4 grid grid-cols-1 md:grid-cols-3 gap-10">
					<div className="footer-column">
						<h3 className="font-semibold text-xl mb-5">Inventors</h3>
						<ul className="space-y-5">
							<li>
								<a href="#">Who We Are</a>
							</li>
							<li>
								<a href="#">Our Team</a>
							</li>
							<li>
								<a href="#">FAQs</a>
							</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3 className="font-semibold text-xl mb-5">Contact Us</h3>
						<div className="space-y-5">
							<p>How can we help?</p>
							<p>
								<strong>Phone</strong>
								<br />
								+234 (814) 688 3161
								<br />
								+234 (813) 232 4456
							</p>
							<p>
								<strong>Email</strong>
								<br />
								<a href="mailto:dinventors@gmail.com">dinventors@gmail.com</a>
							</p>
						</div>
					</div>
					<div className="footer-column">
						<h3 className="font-semibold text-xl mb-5">Social Media</h3>
						<p>
							Follow us on social media to find out the latest updates on our
							progress
						</p>
						<div className="flex space-x-3 mt-5">
							<a
								href="#"
								aria-label="LinkedIn"
								className="bg-[#007965] text-white rounded-full p-2"
							>
								<FaLinkedinIn />
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="bg-[#007965] text-white rounded-full p-2"
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="bg-[#007965] text-white rounded-full p-2"
							>
								<AiFillInstagram />
							</a>
							<a
								href="#"
								aria-label="Facebook"
								className="bg-[#007965] text-white rounded-full p-2"
							>
								<FaFacebookSquare />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center text-sm dark:bg-[#005B4C] bg-[#00241E] text-white py-5">
				© 2024 Inventors Community
			</div>
		</footer>
	);
};

export default Footer;
