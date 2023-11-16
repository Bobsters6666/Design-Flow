"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";
import { ProblemsInfo } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Problem = () => {
  const [currentProblem, setCurrentProblem] = useState<number>(0);

  const [problemDisplayed, setProblemDisplayed] = useState(
    ProblemsInfo[currentProblem]
  );

  useEffect(() => {
    setProblemDisplayed(ProblemsInfo[currentProblem]);
  }, [currentProblem]);

  return (
    <section className="max-w-[1380px] mx-auto px-6">
      <h2 className="mb-10 xl:mb-16 mt-36 text-center font-bold text-3xl  ">
        Does this sound like <span className="text-[#2580eb]">you</span>?
      </h2>
      <div className="flex justify-center items-center gap-10 mb-16 xl:mb-28">
        <div
          onClick={() => setCurrentProblem(0)}
          className={`w-4 h-4 hover:cursor-pointer rounded-full ${
            currentProblem === 0 ? "bg-[#2580eb]" : "bg-[#cbddf2]"
          }`}
        ></div>
        <div
          onClick={() => setCurrentProblem(1)}
          className={`w-4 h-4 rounded-full hover:cursor-pointer ${
            currentProblem === 1 ? "bg-[#2580eb]" : "bg-[#cbddf2]"
          }`}
        ></div>
        <div
          onClick={() => setCurrentProblem(2)}
          className={`w-4 h-4 rounded-full hover:cursor-pointer ${
            currentProblem === 2 ? "bg-[#2580eb]" : "bg-[#cbddf2]"
          }`}
        ></div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-16 relative">
        <div className="rounded-lg border-2 border-[#2580eb] border-opacity-[40%] flex-1 ">
          <Image
            src={problemDisplayed.image}
            alt="problem1"
            width={5568}
            height={3712}
            className="rounded-lg xl:max-w-[650px]"
            layout="responsive "
          />
        </div>
        <div className="flex flex-col gap-16 justify-start items-start">
          <h3 className="text-3xl font-bold">
            {problemDisplayed.title}
            {/* Struggling to find <span className="text-[#2580eb]">clients</span>. */}
          </h3>
          <p className="leading-9 ">{problemDisplayed.description}</p>
          <Button
            variant="normal"
            text="Find out how we can help"
            url="/contact"
          />
        </div>

        {/* arrows */}
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="3x"
          className="absolute -left-10 opacity-60 text-[#2580eb] hover:opacity-80 hover:cursor-pointer"
          onClick={() => {
            if (currentProblem > 0) {
              setCurrentProblem(currentProblem - 1);
            } else setCurrentProblem(2);
          }}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          size="3x"
          className="absolute -right-10 opacity-60 text-[#2580eb] hover:opacity-80 hover:cursor-pointer"
          onClick={() => {
            if (currentProblem < 2) {
              setCurrentProblem(currentProblem + 1);
            } else setCurrentProblem(0);
          }}
        />
      </div>
    </section>
  );
};

export default Problem;
