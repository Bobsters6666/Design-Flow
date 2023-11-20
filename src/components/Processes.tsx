import React from "react";
import { ProcessesInfo } from "@/constants";
import SingleProcess from "./SingleProcess";

const Processes = () => {
  const filteredProcessInfo = ProcessesInfo.filter(
    (process, index) => index === 0 || index === 1 || index === 5
  );

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-center font-bold text-4xl xl:mb-36 mb-16">
          Explore our <span className="text-[#2580eb]">Process</span>
        </h2>
        {filteredProcessInfo.map((process, i) => (
          <SingleProcess
            key={process.title}
            title={process.title}
            description={process.description}
            image={process.image}
            imagePosition={process.imagePosition}
            alt={process.alt}
            index={i}
            showFullProcessButton={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Processes;
