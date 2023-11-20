"use client";

import Banner from "@/components/Banner";
import React from "react";
import { GalleryInfo } from "@/constants";
import Case from "@/components/Case";
import { motion } from "framer-motion";
import { fadeDownInView, fadeUpInView } from "@/utils/animations";

const Gallery = () => {
  return (
    <div className="mb-36">
      <Banner text="Gallery" />

      <div className="max-w-[1200px] mx-auto mt-24 text-center">
        <motion.p {...fadeDownInView(0.3)}>Our Gallery</motion.p>
        <motion.h2
          {...fadeDownInView()}
          className="text-center text-3xl xl:text-4xl font-bold mb-16 xl:mb-24"
        >
          Some of our past <span className="text-[#2580eb]">work</span>
        </motion.h2>

        <motion.div
          {...fadeUpInView(0.5)}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 px-8 xl:px-0"
        >
          {GalleryInfo.map((gallery) => (
            <Case
              key={gallery.alt}
              title={gallery.title}
              description={gallery.description}
              image={gallery.image}
              alt={gallery.alt}
            />
          ))}
        </motion.div>
      </div>

      {/* Neon Circles */}

      <div className="w-[650px] h-[480px] pointer-events-none blur-[300px] bg-[#2580eb] rounded-full bg-opacity-40 absolute top-0 left-36 z-0"></div>
      <div className="w-[650px] h-[480px] pointer-events-none blur-[300px] bg-[#D1B7F2] rounded-full bg-opacity-50 absolute top-48 left-0 z-0"></div>
      <div className="w-[350px] h-[180px] pointer-events-none blur-[100px] bg-[#D1B7F2] rounded-full bg-opacity-50 absolute top-0 right-0 z-0"></div>
    </div>
  );
};

export default Gallery;
