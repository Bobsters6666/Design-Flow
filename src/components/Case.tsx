import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface CaseProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const Case = ({ title, description, image, alt }: CaseProps) => {
  const caseAnimation = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },

    rest: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="rounded-md">
      <motion.div
        className="relative group while"
        whileHover="show"
        initial="rest"
        animate="rest"
      >
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-black bg-opacity-10 group-hover:bg-opacity-50 z-10">
          <motion.h3
            className="absolute top-[45%] -translate-y-1/2 text-center left-1/2 -translate-x-1/2  text-white text-2xl xl:text-3xl cursor-pointer"
            variants={caseAnimation}
          >
            {title}
          </motion.h3>

          <motion.p
            className="absolute top-[60%] -translate-y-1/2 text-center left-1/2 -translate-x-1/2  text-white text-lg xl:text-xl opacity-[80%]"
            variants={caseAnimation}
          >
            {description}
          </motion.p>

          <motion.button
            className="absolute bottom-[5%] -translate-y-1/2 text-center left-1/2 -translate-x-1/2  text-white text-xl xl:text-lg px-6 py-2 border-2 border-[#2580eb] border-opacity-90 rounded-md transition-all duration-300 ease-in-out hover:bg-[#2580eb] shadow-md hover:shadow-xl"
            style={{ textShadow: "1px 1px 2px black" }}
            variants={caseAnimation}
          >
            Learn more
          </motion.button>
        </div>
        <Image
          src={image}
          alt={alt}
          width={1000}
          height={1000}
          className="rounded-sm"
        />
      </motion.div>
    </div>
  );
};

export default Case;
