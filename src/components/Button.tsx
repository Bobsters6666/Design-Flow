import Link from "next/link";
import React from "react";

interface buttonProps {
  text: string;
  variant: string;
  url?: string;
}

const Button = ({ text, variant, url }: buttonProps) => {
  return (
    <button
      className={`px-6 py-4 transition ease-in-out duration-250 hover:-translate-y-0.5 hover:shadow-2xl hover:bg-opacity-80 ${
        variant == "normal"
          ? "font-bold bg-[#2580eb] text-white  rounded-md shadow-lg"
          : "font-bold border-2 border-[#2580eb]  rounded-md shadow-sm text-[#2580eb]"
      }`}
    >
      {url ? <Link href={url}>{text} </Link> : <>{text}</>}
    </button>
  );
};

export default Button;
