import Button from "@/components/Button";
import Form from "@/components/Form";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Processes from "@/components/Processes";
import Service from "@/components/Service";
import { ServicesInfo } from "@/constants";

export default function Home() {
  const filteredServices = ServicesInfo.filter((service, i) => i < 3);
  console.log(filteredServices);

  return (
    <main className="relative">
      <div className="">
        <Hero />
        <Problem />
        <Help />

        <div className="text-center mb-48 px-8 xl:px-0">
          <p className="text-center font-bold opacity-60 mt-24 mb-2">
            What we provide
          </p>
          <h2 className="text-center font-bold text-4xl mb-20">
            Let us help solve your{" "}
            <span className="text-[#2580eb]">Problems</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px] gap-14 mb-16">
            {filteredServices.map((service) => (
              <Service
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkTo={service.linkTo}
              />
            ))}
          </div>

          <Button text="Learn more" variant="normal" url="/services" />
        </div>

        <Processes />
        <Form />
      </div>
    </main>
  );
}
