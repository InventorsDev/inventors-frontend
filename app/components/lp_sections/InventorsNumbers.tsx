'use client';

import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const InventorsNumbers = () => {
	const [startCounting, setStartCounting] = useState(false);
	const [key, setKey] = useState(0); // This key will force re-render of CountUp on each scroll
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setStartCounting(true);
						setKey((prevKey) => prevKey + 1); // Reset the key to re-trigger CountUp
					} else {
						setStartCounting(false);
					}
				});
			},
			{ threshold: 0.5 } // Trigger when 50% of the element is visible
		);

		const currentRef = sectionRef.current; // Capture the current ref value

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<div className="container my-20" ref={sectionRef}>
			<div className="bg-dark-gradient py-8 px-6 sm:py-12 sm:px-10 md:py-14 md:px-20 rounded-[4px] text-white">
				<p className="text-center text-lg sm:text-2xl md:text-2xl font-bold sm:font-medium">
					INVENTORS IN NUMBERS
				</p>
				<div className="flex flex-wrap justify-around mt-10 sm:mt-14">
					<div className="w-1/2 mb-10 sm:mb-0 sm:w-1/4 text-center flex flex-col gap-1">
						<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							2015
						</p>
						<p className="text-md">Year Founded</p>
					</div>
					<div className="w-1/2 mb-10 sm:mb-0 sm:w-1/4 text-center flex flex-col gap-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							{startCounting ? (
								<CountUp key={key} end={719} duration={3} />
							) : (
								'0'
							)}
						</h2>
						<p className="text-md">LinkedIn</p>
					</div>
					<div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							{startCounting ? (
								<CountUp key={key + 1} end={465} duration={3} />
							) : (
								'0'
							)}
						</h2>
						<p className="text-md">Team Members</p>
					</div>
					<div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							{startCounting ? (
								<CountUp key={key + 2} end={102} duration={3} />
							) : (
								'0'
							)}
						</h2>
						<p className="text-md">Discord</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InventorsNumbers;
