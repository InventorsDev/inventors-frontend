import CoreValues from './components/lp_sections/CoreValues';
import GetInTouch from './components/lp_sections/GetInTouch';
import Hero from './components/lp_sections/Hero';
import InventorsNumbers from './components/lp_sections/InventorsNumbers';
import JoinNewsletter from './components/lp_sections/JoinNewsletter';
import MeetLeads from './components/lp_sections/MeetLeads';
import Partners from './components/lp_sections/Partners';
import PastEvents from './components/lp_sections/PastEvents';

import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<link rel="prefetch" href="/images/light-logo.webp" as="image" />
				<link rel="prefetch" href="/images/dark-logo.webp" as="image" />
				<link rel="prefetch" href="/images/inventors-leads.webp" as="image" />
			</Head>
			<Hero />
			<CoreValues />
			<PastEvents />
			<InventorsNumbers />
			<MeetLeads />
			{/* <Partners /> */}
			<JoinNewsletter />
			<GetInTouch />
		</>
	);
}
