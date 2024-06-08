import Button from './components/Button';
import CoreValues from './components/lp_sections/CoreValues';
import GetInTouch from './components/lp_sections/GetInTouch';
import Hero from './components/lp_sections/Hero';
import InventorsNumbers from './components/lp_sections/InventorsNumbers';
import JoinNewsletter from './components/lp_sections/JoinNewsletter';
import MeetLeads from './components/lp_sections/MeetLeads';
import Partners from './components/lp_sections/Partners';
import PastEvents from './components/lp_sections/PastEvents';

export default function Home() {
	return (
		<>
			<Button
				href="/app"
				text="Go to App"
				transparent={true}
				textColor="primary-green"
			/>
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
