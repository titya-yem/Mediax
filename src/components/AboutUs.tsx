import checkup from "@/../public/CheckUp.png";
import { aboutUsLists } from "@/contexts/AboutUs";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container px-6">
      <section className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-2/3 md:w-1/2 lg:w-1/3">
          <Image
            src={checkup}
            alt="Mediax Clinic checkup image"
            className="rounded-sm"
          />
        </div>
        <div className="md:w-1/2">
          <div className="space-y-3">
            <h3 className="text-lg lg:text-xl font-semibold text-center md:text-left text-green-500">
              24/7 Emergency Service
            </h3>
            <h1 className="text-2xl xl:text-3xl leading-tight xl:leading-tight font-bold text-center md:text-left">
              Affordable Health Care Solutions
            </h1>
            <p className="text-center md:text-left">
              A bref statement outlingig the purpose and mission of the clinic.
              This can include the commitment to patient care. Community health,
              and any specifical goals for out values.
            </p>
            <div className="flex flex-col lg:flex-row ml-14 lg:ml-0 lg:gap-10">
              <div>
                {aboutUsLists.slice(0, 3).map((li) => (
                  <li
                    key={li.name}
                    className="flex items-center gap-4 pb-2 list-none"
                  >
                    <span>{li.icon}</span>
                    <p className=" font-medium">{li.name}</p>
                  </li>
                ))}
              </div>
              <div>
                {aboutUsLists.slice(3, 6).map((li) => (
                  <li
                    key={li.name}
                    className="flex items-center gap-4 pb-2 list-none"
                  >
                    <span>{li.icon}</span>
                    <p className=" font-medium">{li.name}</p>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
