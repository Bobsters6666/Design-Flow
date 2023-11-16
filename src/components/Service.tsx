import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface serviceProps {
  title: string;
  description: string;
  icon: string;
  linkTo: string;
}

const Service = ({ title, description, icon, linkTo }: serviceProps) => {
  return (
    <div className="border-2 bg-white border-[#2580eb] rounded-md group hover:cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#2580eb] hover:text-white hover:shadow-lg relative z-10">
      <div className="flex flex-col gap-8 text-center px-6 py-8 h-full">
        <FontAwesomeIcon icon={faComputer} size="4x" />
        <h3 className="text-[26px] leading-8 font-bold px-6">{title}</h3>
        <p className="text-md opacity-80 px-2">{description}</p>
        <button className="px-8 py-3 bg-[#2580eb] text-white self-center rounded-md group-hover:bg-white group-hover:text-[#2580eb] group-hover:shadow-lg mt-auto ">
          <Link href={linkTo}>Explore</Link>
        </button>
      </div>
    </div>
  );
};

export default Service;
