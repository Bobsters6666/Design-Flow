import React from "react";
import { ServicesInfo } from "@/constants";
import Service from "@/components/Service";
import Form from "@/components/Form";
import Image from "next/image";
import Banner from "@/components/Banner";

const Services = () => {
  return (
    <section className="px-8 xl:px-0 relative z-10 grid">
      <Banner text="Our Services" />

      <div>
        <p className="text-center font-bold opacity-60 mt-24 mb-2">
          Our Services
        </p>
        <h2 className="text-center font-bold text-4xl mb-20">
          From Designers, For <span className="text-[#2580eb]">Designers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px] gap-14 mb-48">
          {ServicesInfo.map((service) => (
            <Service
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkTo={service.linkTo}
            />
          ))}
        </div>
      </div>

      <Form />

      {/* Neon Circles */}

      <div className="w-[650px] h-[480px] pointer-events-none blur-[300px] bg-[#2580eb] rounded-full bg-opacity-40 absolute top-0 left-36 z-0"></div>
      <div className="w-[650px] h-[480px] pointer-events-none blur-[300px] bg-[#D1B7F2] rounded-full bg-opacity-50 absolute top-48 left-0 z-0"></div>
      <div className="w-[350px] h-[180px] pointer-events-none blur-[100px] bg-[#D1B7F2] rounded-full bg-opacity-50 absolute top-0 right-0 z-0"></div>
    </section>
  );
};

export default Services;
