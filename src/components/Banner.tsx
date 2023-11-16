import React from "react";
import Image from "next/image";

interface BannerProps {
  text: string;
}

const Banner = ({ text }: BannerProps) => {
  return (
    <div className="h-96 relative z-10">
      <span className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></span>

      <Image
        src="/process6.jpg"
        alt="wide shot of office"
        layout="fill"
        objectFit="cover"
      />
      <p className="text-6xl tracking-wider -rotate-2 text-white font-bold absolute z-20 left-36 top-24">
        {text}
      </p>
    </div>
  );
};

export default Banner;
