import { Providers } from './providers';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const dmSans = DM_Sans({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Inventors Community',
	description:
		'We are a community of developers, writers, designers, and all individuals in tech field.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`bg-lightbg text-black dark:bg-darkbg dark:text-white ${dmSans.className}`}
			>
				<Providers>
					<main>
						<Navbar />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	);
}
