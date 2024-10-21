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
	title: {
		default: 'Inventors Community',
		template: '%s | Inventors Community',
	},
	description:
		'A community of developers, writers, designers, and all individuals in tech field who are passionate about helping one another grow.',
	keywords: ['community', 'developers', 'designers', 'writers', 'tech'],
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
