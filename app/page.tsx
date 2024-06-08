import CoreValues from './components/lp_sections/CoreValues';
import GetInTouch from './components/lp_sections/GetInTouch';
import Hero from './components/lp_sections/Hero';
import InventorsNumbers from './components/lp_sections/InventorsNumbers';
import JoinNewsletter from './components/lp_sections/JoinNewsletter';
import MeetLeads from './components/lp_sections/MeetLeads';
import Partners from './components/lp_sections/Partners';
import PastEvents from './components/lp_sections/PastEvents';

import Button from './components/Button'; // Import the Button component

export default function Home() {
	return (
		<>
			<Hero />
			<CoreValues />
			<PastEvents />
			<InventorsNumbers />
			<MeetLeads />
			<Partners />
			<JoinNewsletter />
			<GetInTouch />
		</>
	);
}
