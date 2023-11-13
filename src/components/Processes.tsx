import React from "react";
import Process from "./Process";
import { ProcessesInfo } from "@/constants";

const Processes = () => {
  const filteredProcessInfo = ProcessesInfo.filter(
    (process, index) => index === 0 || index === 1 || index === 5
  );

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-center font-bold text-4xl mb-36">
          Explore our <span className="text-[#2580eb]">Process</span>
        </h2>
        {filteredProcessInfo.map((process, i) => (
          <Process
            key={process.title}
            title={process.title}
            description={process.description}
            image={process.image}
            imagePosition={process.imagePosition}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Processes;
