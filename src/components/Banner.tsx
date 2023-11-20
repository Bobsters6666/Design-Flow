import React from "react";
import Image from "next/image";

interface BannerProps {
  text: string;
}

const Banner = ({ text }: BannerProps) => {
  return (
    <div className="xl:h-96 lg:h-80 h-64 relative z-10">
      <span className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></span>

      <Image
        src="/banner.jpg"
        alt="wide shot of office"
        layout="fill"
        className="object-cover"
      />
      <p className="max-w-[1440px] mx-auto xl:text-6xl lg:text-5xl text-4xl tracking-wider -rotate-2 text-white font-bold relative z-20 xl:left-36 left-24 top-24">
        {text}
      </p>
    </div>
  );
};

export default Banner;
