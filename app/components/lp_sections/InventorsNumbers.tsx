const InventorsNumbers = () => {
  return (
    <div className=" p-6 sm:p-10 md:py-24 md:px-28  h-auto">
      {/* <div className="dark:bg-dark-gradient bg-light-gradient py-12 px-20 rounded-[4px]"> */}
      <div className="dark:bg-dark-gradient bg-light-gradient py-8 px-6 sm:py-12 sm:px-10 md:py-14 md:px-20 rounded-[4px]">
        <p className="text-center text-xl sm:text-2xl md:text-2xl font-medium">
          INVENTORS IN NUMBERS
        </p>
        <div className="flex flex-wrap justify-around mt-14">
          <div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-medium ">
              2015
            </p>
            <p className="text-xs">Year Founded</p>
          </div>
          <div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium ">
              719
            </h2>
            <p className=" text-xs">LinkedIn</p>
          </div>
          <div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium ">
              465
            </h2>
            <p className="text-xs">Team Members</p>
          </div>
          <div className="w-1/2 sm:w-1/4 text-center flex flex-col gap-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium ">
              102
            </h2>
            <p className="text-xs">Discord</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorsNumbers;
