import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto relative pt-32">
      <div className="flex">
        <div className="flex flex-col gap-16 pt-[300px] absolute left-0 z-10">
          <h1 className="text-7xl font-bold whitespace-nowrap leading-[80px] ">
            Build an online reputation <br />
            that actually{" "}
            <span className="text-[#2580eb]">
              converts <br />
              clients
            </span>
            .
          </h1>
          <p className="text-[20px]">
            Our team at Design Flow focus on help you tailor your interior
            design and home decor <br />
            website that your clients love and trust.{" "}
          </p>
          <div className="flex items-center gap-10">
            <Button variant="normal" text="Chat with us now" url="/contact" />
            <Button variant="ghost" text="View our work" url="/gallery" />
          </div>
        </div>

        <div className="border-2 border-[#2580eb] border-opacity-[30%] shrink-0 absolute right-0 z-0 rounded-lg shadow-lg">
          <Image
            src="/hero.jpg"
            alt="hero"
            width={1000}
            height={2000}
            className=" max-w-[650px] rounded-lg m-1"
          />
        </div>
      </div>

      <div className="mt-[85vh] bg-white px-8 py-4 rounded-md">
        <div className="max-w-[1000px] mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
