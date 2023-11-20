"use client";

import React from "react";
import { ServicesInfo } from "@/constants";
import Service from "@/components/Service";
import Form from "@/components/Form";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import { fadeDownInView, fadeUpInView } from "@/utils/animations";

const Services = () => {
  return (
    <section className=" relative z-10 grid">
      <Banner text="Our Services" />

      <div className="px-8 xl:px-0">
        <motion.p
          {...fadeDownInView(0.3)}
          className="text-center font-bold opacity-60 mt-24 mb-2"
        >
          Our Services
        </motion.p>
        <motion.h2
          {...fadeDownInView()}
          className="text-center font-bold text-4xl mb-20"
        >
          From Designers, For <span className="text-[#2580eb]">Designers</span>
        </motion.h2>

        <motion.div
          {...fadeUpInView(0.5)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px] gap-14 mb-48"
        >
          {ServicesInfo.map((service) => (
            <Service
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkTo={service.linkTo}
            />
          ))}
        </motion.div>
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
