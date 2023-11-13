import Image from "next/image";
import React from "react";
import Button from "./Button";

interface ProcessProps {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  index: number;
}

const Process = ({
  title,
  description,
  image,
  imagePosition,
  index,
}: ProcessProps) => {
  return (
    <div>
      <div
        className={`flex gap-24 relative ${
          imagePosition == "right" ? "flex-row-reverse" : ""
        } z-10 mb-44`}
      >
        <div className="flex flex-col gap-12 items-start ">
          <h3 className="text-black font-bold text-2xl mt-8">{title}</h3>
          <p className="leading-[30px]">{description}</p>
          <Button variant="normal" text="Work with us" url="/contact" />
        </div>

        <div className="shrink-0 rounded-md border-2 border-[#2580eb] border-opacity-[50%] shadow-2xl">
          <Image
            src={image}
            alt={image}
            width={1000}
            height={1000}
            className="max-w-[550px] max-h-[650px] m-2 rounded-md"
          />
        </div>

        <div className="absolute w-[512px] h-[512px] blur-3xl bg-violet-300 opacity-[15%] pointer-events-none z-0"></div>
      </div>

      {index === 1 ? (
        <div className="flex flex-col gap-16 items-center justify-center mb-36">
          <div className="w-5 h-5 rounded-full shadow-sm bg-blue-300"></div>
          <div className="w-5 h-5 rounded-full shadow-sm bg-blue-400"></div>
          <div className="w-5 h-5 rounded-full shadow-sm bg-blue-500"></div>
          <Button variant="normal" text="See our full process" url="/process" />
          <div className="w-5 h-5 rounded-full shadow-sm bg-blue-500"></div>
          <div className="w-5 h-5 rounded-full shadow-sm bg-blue-400"></div>
          <div className="w-5 h-5 rounded-full shadow-sm bg-blue-300"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Process;
