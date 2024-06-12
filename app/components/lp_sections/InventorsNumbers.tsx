const InventorsNumbers = () => {
	return (
		<div className="container my-20">
			<div className="dark:bg-dark-gradient bg-light-gradient py-8 px-6 sm:py-12 sm:px-10 md:py-14 md:px-20 rounded-[4px] text-white">
				<p className="text-center text-lg sm:text-2xl md:text-2xl font-bold sm:font-medium">
					INVENTORS IN NUMBERS
				</p>
				<div className="flex flex-wrap justify-around mt-10 sm:mt-14">
					<div className="w-1/2 mb-10 sm:mb-0 sm:w-1/4 text-center flex flex-col gap-1">
						<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold ">
							2015
						</p>
						<p className="text-md">Year Founded</p>
					</div>
					<div className="w-1/2 mb-10 sm:mb-0 sm:w-1/4 text-center flex flex-col gap-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
							719
						</h2>
						<p className=" text-md">LinkedIn</p>
					</div>
					<div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
							465
						</h2>
						<p className="text-md">Team Members</p>
					</div>
					<div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
							102
						</h2>
						<p className="text-md">Discord</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InventorsNumbers;
