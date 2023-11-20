"use client";

import Image from "next/image";
import React from "react";

const Form = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="max-w-[1440px] mx-auto relative px-8 xl:p-0">
      <div>
        <h2 className="text-3xl font-bold text-center">
          <span className="xl:mr-40">
            Send us a <span className="text-[#2580eb]">quick</span> message,{" "}
          </span>
          <br />
          We'll reply <span className="text-[#2580eb]">same day</span>!
        </h2>
        <div className="flex flex-col xl:flex-row justify-center items-start gap-16 xl:gap-32 xl:mt-36 xl:mb-40 mt-16 mb-24">
          <div className="border-2 border-[#2580eb] border-opacity-50 shadow-xl rounded-md">
            <Image
              src="/form.jpg"
              alt="woman holding book with coffee"
              width={1000}
              height={1000}
              className="rounded-md  xl:max-w-[500px]"
            />
          </div>
          <form
            action="submit"
            className="mt-4 flex flex-col gap-8 xl:min-w-[500px] self-stretch"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Business Name"
              className="px-6 py-3 border-2 border-gray-600 rounded-md"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="px-6 py-3 border-2 border-gray-600 rounded-md"
            />
            <label className="-mb-2 font-bold text-[17px]">
              Does your company have an existing website?
            </label>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <input type="radio" name="existing_website" value="No" />
                <label htmlFor="existing_website">No</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="existing_website" value="Yes" />
                <label htmlFor="existing_website">Yes</label>
              </div>
            </div>
            <input
              type="text"
              placeholder="Website url (optional)"
              className="px-6 py-3 border-2 border-gray-600 rounded-md"
            />
            <div className="flex flex-col gap-4">
              <label
                htmlFor="acquiring_clients"
                className="font-bold text-[17px]"
              >
                What's your main way of acquiring clients?
              </label>
              <input
                type="text"
                placeholder="Answer"
                className="px-6 py-3 border-2 border-gray-600 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="acquiring_clients"
                className="font-bold text-[17px]"
              >
                Anything else you want us to know.
              </label>
              <textarea
                placeholder="Message"
                rows={5}
                className="px-6 py-3 border-2 border-gray-600 rounded-md"
              />
            </div>
            <button
              className="font-bold text-white bg-[#2580eb] px-6 py-4 rounded-md shadow-lg transition ease-in-out duration-250 hover:bg-blue-200 hover:text-[#2580eb] hover:shadow-xl"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
