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
      // scale: 1,
      // originX: 0,
      // originY: 0,

      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },

    rest: {
      opacity: 0,
      // scale: 0.5,
      // originX: 0,
      // originY: 0,

      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div>
      <motion.div
        className="relative group while"
        whileHover="show"
        initial="rest"
        animate="rest"
      >
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-black bg-opacity-10 group-hover:bg-opacity-50 z-10">
          <motion.h3
            className="absolute top-1/2 -translate-y-1/2 text-center left-1/2 -translate-x-1/2  text-white text-2xl xl:text-3xl cursor-pointer"
            variants={caseAnimation}
          >
            {title}
          </motion.h3>
        </div>
        <Image src={image} alt={alt} width={1000} height={1000} />
      </motion.div>
    </div>
  );
};

export default Case;
