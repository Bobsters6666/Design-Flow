import Image from "next/image";
import React from "react";
import Button from "./Button";

const Problem = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6">
      <h2 className="mb-10 xl:mb-16 mt-36 text-center font-bold text-3xl  ">
        Does this sound like <span className="text-[#2580eb]">you</span>?
      </h2>
      <div className="flex justify-center items-center gap-10 mb-16 xl:mb-28">
        <div className="w-4 h-4 bg-[#2580eb] rounded-full"></div>
        <div className="w-4 h-4 bg-[#cbddf2] rounded-full"></div>
        <div className="w-4 h-4 bg-[#cbddf2] rounded-full"></div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-16">
        <div className="rounded-lg border-2 border-[#2580eb] border-opacity-[40%] flex-1 ">
          <Image
            src={"/problem1.jpg"}
            alt="problem1"
            width={5568}
            height={3712}
            className="rounded-lg xl:max-w-[650px]"
            layout="responsive "
          />
        </div>
        <div className="flex flex-col gap-16 justify-start items-start">
          <h3 className="text-3xl font-bold">
            Struggling to find <span className="text-[#2580eb]">clients</span>.
          </h3>
          <p className="leading-9 ">
            "Are you an interior designer or home stager struggling to secure
            the clients your talent deserves? In a competitive industry where
            first impressions matter, a compelling online presence can make all
            the difference. At Design Flow, we understand the unique challenges
            of the design world. Our expert team is dedicated to crafting
            websites that not only showcase your aesthetic prowess but also
            strategically position you to attract your ideal client. Let us
            transform your online presence, so you can focus on what you do best
            – creating stunning spaces."
          </p>
          <Button
            variant="normal"
            text="Find out how we can help"
            url="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
