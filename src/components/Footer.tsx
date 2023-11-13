import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#2580eb] border-opacity-60">
      <div className="max-w-[1440px] mx-auto relative mt-16 mb-24">
        <div className="flex justify-start items-start gap-40">
          <div className="flex flex-col items-start justify-start gap-12">
            <div className="text-3xl font-bold">Design Flow</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor.
            </p>
            <div></div>
          </div>
          <div className="flex flex-col items-start justify-start gap-12">
            <h4 className="text-lg font-bold">Pages</h4>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col items-start justify-start gap-12">
            <h4 className="text-lg font-bold">Others</h4>
            <Link href="/services">Privacy Policies</Link>
            <Link href="/gallery">Terms & Conditions</Link>
            <Link href="/contact">Refund Policy</Link>
          </div>
          <div className="flex flex-col items-start justify-start gap-12">
            <h4 className="text-lg font-bold">Subscribe to our newsletter</h4>
            <form>
              <input
                placeholder="Email address"
                className="py-4 px-6 w-[380px] rounded-md border-2 border-blue-400"
              />
            </form>
            <Button variant="normal" text="Submit" />
          </div>
        </div>
      </div>

      <div className="bg-[#2580eb] text-center py-8 text-white text-lg">
        Copyright © Design Flow 2023 | Powered by NextJS 14
      </div>
    </footer>
  );
};

export default Footer;
