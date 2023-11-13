import Image from "next/image";
import React from "react";
import Button from "./Button";

const Problem = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <h2 className="mb-16 mt-36 text-center font-bold text-5xl">
        Does this sound like <span className="text-[#2580eb]">you</span>?
      </h2>
      <div className="flex justify-center items-center gap-10 mb-28">
        <div className="w-5 h-5 bg-[#2580eb] rounded-full"></div>
        <div className="w-5 h-5 bg-[#cbddf2] rounded-full"></div>
        <div className="w-5 h-5 bg-[#cbddf2] rounded-full"></div>
      </div>
      <div className="flex items-center justify-center gap-16">
        <div className="shrink-0 max-w-[800px] rounded-lg border-2 border-[#2580eb] border-opacity-[40%]">
          <Image
            src={"/problem1.jpg"}
            alt="problem1"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-16 justify-start items-start">
          <h3 className="text-3xl font-bold">
            Struggling to find <span className="text-[#2580eb]">clients</span>?
          </h3>
          <p>
            Blandit aliquam etiam. Ligula ullamcorper malesuada proin libero
            nunc. Nulla pellentesque dignissim enim sit amet. Est placerat in
            egestas erat imperdiet sed euismod nisi. Mattis rhoncus urna neque
            viverra. Non curabitur gravida arcu ac tortor. Consectetur a erat
            nam at lectus. Dolor magna eget est lorem ipsum dolor sit. Mauris
            rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
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
