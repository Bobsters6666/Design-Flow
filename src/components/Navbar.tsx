import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-[1440px] mx-auto bg-white/75 sticky top-0 backdrop-blur-lg rounded-md z-30">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="text-xl font-bold">
          <Link href={"/"}>Design Flow</Link>
        </div>
        <ul className="flex justify-center items-center gap-12">
          <Link href={"/services"}>Services</Link>
          <Link href={"/gallery"}>Gallery</Link>
          <Link href={"/contact"}>Contact</Link>
          <button className="font-bold bg-[#2580eb] text-white px-6 py-4 rounded-md shadow-lg">
            <Link href={"/contact"}>Get a Free Design</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
