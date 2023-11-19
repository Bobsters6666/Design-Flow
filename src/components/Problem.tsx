"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";
import { ProblemsInfo } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimate } from "framer-motion";
import { fadeDownInView } from "@/utils/animations";

const Problem = () => {
  const variants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    top: { y: "-80%", scale: 0.3, zIndex: 3 },
    bottom: { y: "80%", scale: 0.3, zIndex: 3 },
  };

  const positions = ["center", "top", "bottom"];
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 3
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 2) % 3
      );

      return updatedIndexes;
    });
  };

  return (
    <section className="max-w-[1380px] mx-auto px-6 relative">
      <h2 className="ttt mb-10 xl:mb-16 mt-36 text-center font-bold text-3xl  ">
        Does this sound like <span className="text-[#2580eb]">you</span>?
      </h2>
      <div className="flex justify-center items-center gap-10 mb-16 xl:mb-28">
        <div
          className={`w-4 h-4 hover:cursor-pointer rounded-full ${
            positionIndexes[0] % 3 === 0 ? "bg-[#2580eb]" : "bg-[#cbddf2]"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full hover:cursor-pointer ${
            positionIndexes[1] % 3 === 0 ? "bg-[#2580eb]" : "bg-[#cbddf2]"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full hover:cursor-pointer ${
            positionIndexes[2] % 3 === 0 ? "bg-[#2580eb]" : "bg-[#cbddf2]"
          }`}
        ></div>
      </div>

      <div className="flex items-center flex-col justify-center h-[950px] lg:h-[1100px] xl:h-[850px]">
        {ProblemsInfo.map((problem, index) => (
          <motion.div
            key={index}
            initial="center"
            className={`flex flex-col lg:flex-row items-center justify-center gap-16 absolute max-w-[1380px] mx-auto px-6 xl:px-0 lg:flex ${
              positionIndexes[index] % 3 === 0 ? "" : "hidden"
            }`}
            animate={positions[positionIndexes[index]]}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg border-2 border-[#2580eb] border-opacity-[40%] flex-1 ">
              <Image
                src={problem.image}
                alt={problem.image}
                width={5568}
                height={3712}
                className={`rounded-lg lg:max-w-[650px] shrink-1`}
                layout="responsive "
              />
            </div>
            <div className="flex flex-col gap-16 justify-start items-start">
              <h3 className="text-3xl font-bold">
                {problem.title}
                {/* Struggling to find <span className="text-[#2580eb]">clients</span>. */}
              </h3>
              <p className="leading-9 ">{problem.description}</p>
              <Button
                variant="normal"
                text="Find out how we can help"
                url="/contact"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* arrows */}
      <FontAwesomeIcon
        onClick={handleNext}
        icon={faArrowUp}
        size="2x"
        className="absolute left-6 top-20 md:bottom-0 opacity-60 text-[#2580eb] hover:opacity-80 hover:cursor-pointer"
      />
      <FontAwesomeIcon
        onClick={handleBack}
        icon={faArrowDown}
        size="2x"
        className="absolute right-6 top-20 md:bottom-0 opacity-60 text-[#2580eb] hover:opacity-80 hover:cursor-pointer"
      />
    </section>
  );
};

export default Problem;
