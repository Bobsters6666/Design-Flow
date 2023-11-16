import Banner from "@/components/Banner";
import { ProcessesInfo } from "@/constants";
import SingleProcess from "@/components/SingleProcess";
import React from "react";

const Process = () => {
  return (
    <section>
      <Banner text="Our Process" />

      <div className="mt-36 max-w-[1440px] mx-auto">
        <h2 className="text-center font-bold text-4xl mb-36">
          Explore our <span className="text-[#2580eb]">Process</span>
        </h2>
        {ProcessesInfo.map((process, i) => (
          <SingleProcess
            key={process.title}
            title={process.title}
            description={process.description}
            image={process.image}
            imagePosition={process.imagePosition}
            index={i}
            showFullProcessButton={false}
          />
        ))}
      </div>
    </section>
  );
};

export default Process;
