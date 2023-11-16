import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#2580eb] border-opacity-20">
      <div className="max-w-[1440px] mx-auto relative mt-16 mb-24">
        <div className="flex justify-start items-start xl:gap-40 gap-20 flex-wrap px-8 xl:px-0">
          <div className="flex flex-col items-start justify-start xl:gap-12 gap-8">
            <div className="text-3xl font-bold">Design Flow</div>
            <p>
              Serving interior designers and home
              <br />
              stagers since 2023.
            </p>
            <div></div>
          </div>
          <div className="flex flex-col items-start justify-start xl:gap-12 gap-8">
            <h4 className="text-lg font-bold">Pages</h4>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/process">Process</Link>
          </div>
          <div className="flex flex-col items-start justify-start xl:gap-12 gap-8">
            <h4 className="text-lg font-bold">Others</h4>
            <Link href="/services">Privacy Policies</Link>
            <Link href="/gallery">Terms & Conditions</Link>
            <Link href="/contact">Refund Policy</Link>
          </div>
          <div className="flex flex-col items-start justify-start xl:gap-12 gap-8">
            <h4 className="text-lg font-bold">Subscribe to our newsletter</h4>
            <form>
              <input
                placeholder="Email address"
                className="py-3 px-5 w-[350px] rounded-md border-2 border-blue-400"
              />
            </form>
            <Button variant="normal" text="Submit" />
          </div>
        </div>
      </div>

      <div className="bg-[#2580eb] text-center py-6 text-white text-lg">
        Copyright © Design Flow 2023 | Powered by NextJS 14
      </div>
    </footer>
  );
};

export default Footer;
