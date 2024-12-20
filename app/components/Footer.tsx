'use client';

import Image from 'next/image';
import darkLogo from '@/public/images/dark-logo.webp';

import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmSans = DM_Sans({
	subsets: ['latin'],
});

const Footer = () => {
	return (
		<footer className={`border-t border-[#005B4C] mt-10" ${dmSans.className}`}>
			<div className="">
				<div className="container flex py-24 flex-col md:flex-row">
					<div className="footer-column basis-1/4 mr-10 mb-10 md:mb-0">
						<Image
							src={darkLogo}
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
									<a href="/#who-we-are" className="hover:text-primary-green">
										Who We Are
									</a>
								</li>
								<li>
									<Link href="/our-team" className="hover:text-primary-green">
										Our Team
									</Link>
								</li>
								<li>
									<Link href="/faqs" className="hover:text-primary-green">
										FAQs
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer-column">
							<h3 className="font-semibold text-xl mb-5">Contact Us</h3>
							<div className="space-y-5">
								<a
									href="mailto:dinventors@gmail.com"
									className="hover:text-primary-green"
								>
									<p>How can we help?</p>
								</a>
								{/* <p>
								<strong>Phone</strong>
								<br />
								+234 (814) 688 3161
								<br />
								+234 (813) 232 4456
							</p> */}
								<a
									href="mailto:dinventors@gmail.com"
									className="hover:text-primary-green"
								>
									<strong>Email</strong>
									<br />
									<p>dinventors@gmail.com</p>
								</a>
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
									href="https://www.linkedin.com/company/inventors-community"
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn"
									className="bg-[#007965] text-white rounded-full p-2"
								>
									<FaLinkedinIn />
								</a>
								<a
									href="https://x.com/D_INVENTORS"
									target="_blank"
									rel="noreferrer"
									aria-label="Twitter"
									className="bg-[#007965] text-white rounded-full p-2"
								>
									<FaTwitter />
								</a>
								<a
									href="https://www.instagram.com/theinventorscommunity"
									target="_blank"
									rel="noreferrer"
									aria-label="Instagram"
									className="bg-[#007965] text-white rounded-full p-2"
								>
									<AiFillInstagram />
								</a>
								<a
									href="https://facebook.com/inventorsPage"
									target="_blank"
									rel="noreferrer"
									aria-label="Facebook"
									className="bg-[#007965] text-white rounded-full p-2"
								>
									<FaFacebookSquare />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center text-sm bg-[#005B4C] text-white py-5">
				© 2024 Inventors Community
			</div>
		</footer>
	);
};

export default Footer;
