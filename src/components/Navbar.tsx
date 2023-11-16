"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Navbar = () => {
  const ulRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1440px] mx-auto bg-white/75 sticky top-0 backdrop-blur-lg rounded-md z-30">
      <div className="md:flex justify-between items-center px-8 py-4">
        <div className="text-xl font-bold">
          <Link href={"/"}>Design Flow</Link>
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "absolute bg-white h-screen w-screen top-0 left-0 flex"
              : "hidden"
          } md:flex flex-col md:flex-row justify-center items-center gap-12 my-16 md:my-0 animate__slideInDown `}
        >
          <li>
            <Link onClick={() => setIsMenuOpen(false)} href={"/services"}>
              Services
            </Link>
          </li>
          <li>
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link onClick={() => setIsMenuOpen(false)} href={"/contact"}>
              Contact
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Button text="Get a Free Design" variant="normal" url="/contact" />
          </li>
        </ul>

        <div
          onClick={() => setIsMenuOpen(true)}
          className={`md:hidden ${isMenuOpen ? "hidden" : ""}`}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="1x"
            className="absolute right-8 top-6  cursor-pointer"
          />
        </div>
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`md:hidden ${!isMenuOpen ? "hidden" : ""}`}
        >
          <FontAwesomeIcon
            icon={faTimes}
            size="1x"
            className="absolute right-8 top-6  cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
