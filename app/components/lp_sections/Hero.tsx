import Button from "../Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="sm:py-0 mt-4">
      <div className="relative  dark:text-white flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="my-6 text-gray-500">WHO WE ARE</p>
          <h2 className="text-xl md:text-3xl lg:text-5xl mb-6 px-4">
            We&apos;re a <span className="text-green-500">technology</span>{" "}
            community focused on growing skills and where we thrive for
            creativity in the real world
          </h2>
          <div className="my-5">
            <Button
              text="Get Started"
              bgColor="primary-green"
              textColor="white"
              arrow={true}
              transparent={false}
              href="/get-started"
            />
          </div>

          <div className="w-full">
            <Image
              src="/images/inventors-leads.png"
              alt="Image of the Inventors Leads"
              layout="responsive"
              width={1920}
              height={1080}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
