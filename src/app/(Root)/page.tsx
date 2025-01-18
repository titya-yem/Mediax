import { Button } from "@/components/ui/button";
import heroImg from "@/../public/Hero-image.png";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";

const Home = () => {
  return (
    <>
      <main className="pt-10 mb-20 bg-[#edf4fe] md:h-[400px] lg:h-[600px]">
        <div>
          <div className="container flex flex-col md:flex-row gap-6 justify-between items-center px-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center md:text-left text-green-500">
                24/7 Emergency Service
              </h3>
              <div className="space-y-2">
                <h1 className="text-4xl xl:text-5xl leading-tight xl:leading-tight font-bold text-center md:text-left">
                  Caring For{" "}
                  <span className="rounded-md rounded-tr-3xl px-1 bg-blue-600 text-white">
                    Health
                  </span>
                  <br />
                  Caring For You
                </h1>
                <p className="text-center md:text-left md:text-lg">
                  a brief statement outlining the purpose and mission of the
                  clinic. this can include the commitment to patient care.
                  community health.
                </p>
              </div>
              <div className="flex gap-4 justify-center md:justify-start items-center">
                <Button className="lg:p-6 lg:text-base rounded-full bg-blue-600 hover:bg-blue-500 duration-150">
                  Download More
                </Button>
                <Button className="lg:p-6 lg:text-base rounded-full bg-green-600 hover:bg-green-500 duration-150">
                  See All Services
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={heroImg}
                alt="Our doctor at Mediax Clinic"
                className="rounded-md w-[1280px]"
              />
            </div>
          </div>
        </div>
      </main>

      <section>
        <AboutUs />
        <Services />
      </section>
    </>
  );
};

export default Home;
