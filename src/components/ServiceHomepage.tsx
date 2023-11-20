"use client";

import { ServicesInfo } from "@/constants";
import React from "react";
import Service from "./Service";
import Button from "./Button";
import { motion } from "framer-motion";
import { inViewFadeDownInView, inViewFadeUpInView } from "@/utils/animations";

const ServiceHomepage = () => {
  const filteredServices = ServicesInfo.filter((service, i) => i < 3);

  return (
    <div className="text-center mb-48 px-8 xl:px-0">
      <motion.p
        {...inViewFadeDownInView(0.3)}
        className="text-center font-bold opacity-60 mt-24 mb-2"
      >
        What we provide
      </motion.p>
      <motion.h2
        {...inViewFadeDownInView()}
        className="text-center font-bold text-4xl mb-20"
      >
        Let us help solve your <span className="text-[#2580eb]">Problems</span>
      </motion.h2>
      <motion.div
        {...inViewFadeUpInView(0.5)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px] gap-14 mb-16"
      >
        {filteredServices.map((service) => (
          <Service
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            linkTo={service.linkTo}
          />
        ))}
      </motion.div>

      <Button text="Learn more" variant="normal" url="/services" />
    </div>
  );
};

export default ServiceHomepage;
