'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import lightLogo from '@/public/images/light-logo.webp';
import darkLogo from '@/public/images/dark-logo.webp';

import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
	subsets: ['latin'],
});

import { MdOutlineMenu, MdClose } from 'react-icons/md';
import Btn from './Button';

const links = [
	{
		name: 'Who We Are',
		href: '/#who-we-are',
	},
	{
		name: 'Our Team',
		href: '/our-team',
	},
	{
		name: 'Events',
		href: '/events',
	},
	{
		name: 'FaQs',
		href: '/faqs',
	},
	// {
	//   name: "Contact Us",
	//   href: "#contact-us",
	// },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={`py-6 w-full z-20 text-white ${dmSans.className}`}>
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex-none">
					<Link href="/">
						<Image src={darkLogo} alt="Inventors" height={40} width={40} />
					</Link>
				</div>
				<div className="hidden md:flex gap-10 justify-center items-center">
					<div className=" flex-1 mx-auto justify-center space-x-10">
						{links.map((link) => (
							<Link
								href={link.href}
								className="hover:text-primary-green"
								key={link.name}
							>
								{link.name}
							</Link>
						))}
					</div>
					<div className="hidden md:flex space-x-4">
						<a href="mailto:dinventors@gmail.com">
							<Btn className="w-40">Contact Us</Btn>
						</a>
						{/* 
             <button className="bg-light-green text-primary-green px-4 py-2 rounded w-40">
                Contact Us
              </button>
            <button className="bg-primary-green text-light-green px-4 py-2 rounded w-40">
              Log In
            </button> */}
					</div>
				</div>
				<div className="md:hidden" onClick={toggleNav}>
					<MdOutlineMenu size={32} />
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden fixed top-0 left-0 w-full h-full bg-darkbg text-white flex flex-col items-center justify-center ">
					<MdClose
						size={32}
						className="absolute top-8 right-4"
						onClick={toggleNav}
					/>
					{links.map((link) => (
						<a
							href={link.href}
							className="text-xl py-2"
							key={link.name}
							onClick={toggleNav}
						>
							{link.name}
						</a>
					))}
					<a href="mailto:dinventors@gmail.com">
						<Btn className="w-40">Contact Us</Btn>
					</a>
					{/* <button className="bg-light-green text-primary-green px-4 py-2 rounded mt-4 w-40">
						Create Account
					</button>
					<button className="bg-primary-green text-light-green px-4 py-2 rounded mt-4 w-40">
						Log In
					</button> */}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
