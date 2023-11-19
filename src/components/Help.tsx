import React from "react";

const Help = () => {
  return (
    <section className="bg-black my-36">
      <div className="max-w-[1440px] mx-auto text-white flex flex-col items-center">
        <p className="xl:text-7xl lg:text-5xl text-[28px] px-10 py-8 xl:leading-[100px] lg:leading-[80px] leading-[55px] font-bold">
          Don't Worry, <br />{" "}
          <span className="ml-10 text-center">Design Flow is here to help</span>
        </p>
        <button className="xl:py-4 py-3 px-6 text-white font-bold border-2 border-[#2580eb] mb-12 rounded-sm transition-all hover:bg-[#2580eb] hover:bg-opacity-80">
          Chat with us now
        </button>
      </div>
    </section>
  );
};

export default Help;
