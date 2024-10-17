import Image from "next/image";
import Link from "next/link";

import Button from "../Button";

import eventimg1 from "/public/images/events-featured-img.webp";

import { BsArrowUpRight } from "react-icons/bs";

const events = [
  {
    title: "Townhall Meeting",
    date: "23rd Nov 2022",
    image: eventimg1,
    link: "#",
  },
  {
    title: "Workshop",
    date: "1st Dec 2022",
    image: eventimg1,
    link: "#",
  },
  {
    title: "Conference",
    date: "10th Dec 2022",
    image: eventimg1,
    link: "#",
  },
  {
    title: "Seminar",
    date: "15th Dec 2022",
    image: eventimg1,
    link: "#",
  },
  {
    title: "Webinar",
    date: "20th Dec 2022",
    image: eventimg1,
    link: "#",
  },
  {
    title: "Hackathon",
    date: "20th Dec 2023",
    image: eventimg1,
    link: "#",
  },
];

const PastEvents = () => {
  const latestEvents = events.slice(0, 4);

  return (
    <section className="container bg-dark-green text-white py-20">
      <div className="flex justify-between items-start md:items-cente mb-8 gap-4">
        <h2 className="lg:text-3xl text-xl font-semibold uppercase text-black dark:text-white">
          Take a look at some of our <br /> past events
        </h2>
        <Button
          href="#"
          text="View all events"
          transparent={true}
          greenTransparent={true}
        />
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
              className="rounded w-full object-cover"
            />
            <div className="flex justify-between items-center align-center my-3">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {event.title}
              </h3>
              <p className="text-gray-400">{event.date}</p>
            </div>
            <Link href={event.link} className="text-primary-green">
              Learn More
              <BsArrowUpRight className="inline-block ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;
