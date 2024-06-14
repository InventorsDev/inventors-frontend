import Image from "next/image";
import partnerLogo from "public/images/microsoft-logo.png";

// Sample partners array
const partners = [
  {
    name: "Microsoft",
    logo: partnerLogo, // Replace with the actual image path
  },
  {
    name: "Microsoft",
    logo: partnerLogo, // Replace with the actual image path
  },
  {
    name: "Microsoft",
    logo: partnerLogo, // Replace with the actual image path
  },
  {
    name: "Microsoft",
    logo: partnerLogo, // Replace with the actual image path
  },
  {
    name: "Microsoft",
    logo: partnerLogo, // Replace with the actual image path
  },
];

const Partners = () => {
  return (
    <section className="container bg-dark-green text-white">
      <div className="mx-auto">
        <h3 className="text-xl text-teal-400 mb-2">Partners</h3>
        <h2 className="text-3xl font-semibold mb-4">
          <span className="line-through">Companies</span> we work with
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col justify-between">
              <div className="w-24 h-24 relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
