import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import eventimg1 from "/public/images/events-featured-img.png";

// Sample events array
const events = [
  {
    title: "Townhall Meeting",
    date: "23rd Nov 2022",
    image: eventimg1, // Replace with the actual image path
    link: "#",
  },
  {
    title: "Workshop",
    date: "1st Dec 2022",
    image: eventimg1, // Replace with the actual image path
    link: "#",
  },
  {
    title: "Conference",
    date: "10th Dec 2022",
    image: eventimg1, // Replace with the actual image path
    link: "#",
  },
  {
    title: "Seminar",
    date: "15th Dec 2022",
    image: eventimg1, // Replace with the actual image path
    link: "#",
  },
  {
    title: "Webinar",
    date: "20th Dec 2022",
    image: eventimg1, // Replace with the actual image path
    link: "#",
  },
  {
    title: "Hackathon",
    date: "20th Dec 2023",
    image: eventimg1, // Replace with the actual image path
    link: "#",
  },
];

const PastEvents = () => {
  // Get the latest 4 events added into the array
  const latestEvents = events.slice(0, 4);

  return (
    <section className="container bg-dark-green text-white">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-cente mb-8 gap-4">
          <h2 className="text-3xl font-semibold">
            TAKE A LOOK AT SOME OF PAST EVENTS
          </h2>
          <Link href="/events">
            <Button
              href="#"
              text="View all events"
              textColor="dark-green"
            ></Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestEvents.map((event, index) => (
            <div key={index} className="bg-dark-green rounded-lg">
              <Image
                src={event.image}
                alt={event.title}
                layout="responsive"
                width={100}
                height={60}
                className="rounded-lg w-full"
              />
              <div className="flex justify-between items-center align-center my-3">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-400">{event.date}</p>
              </div>
              <Link href={event.link}>
                <Button
                  href={event.link}
                  text="Learn More"
                  textColor="light-green"
                ></Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
