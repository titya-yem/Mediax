import { ourServices } from "@/contexts/Services";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="container px-6 pt-28">
      <div className="space-y-4">
        <h4 className="text-lg lg:text-xl font-semibold text-center text-green-500">
          Our Services
        </h4>
        <h1 className="text-3xl xl:text-4xl font-bold text-center">
          Our Mediax <span className="text-green-500">Specialties</span>{" "}
          Technical Service
        </h1>
      </div>

      {/* Flex Section */}
      <div className="flex flex-wrap justify-center lg:justify-between items-center mt-10 gap-5">
        {ourServices.map((li) => (
          <div
            key={li.name}
            className="flex-grow lg:basis-1/4 lg:max-w-[22%] py-4 text-center border rounded-xl transition-all"
          >
            <ul>
              <li className="flex flex-col items-center gap-2">
                <Image
                  src={li.img}
                  width={46}
                  alt="Mediax Clinic Services"
                  className="bg-gray-300 p-2 rounded-full"
                />
                <h5 className="font-bold">{li.name}</h5>
                <span className="text-[#2a2a2a]">{li.doctor}</span>
                <Link
                  href={li.link}
                  className="bg-green-500 hover:bg-green-400 text-white py-1 px-4 rounded-full"
                >
                  Read More
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
