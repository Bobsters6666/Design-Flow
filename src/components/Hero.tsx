"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const Hero = () => {
  const kitchen = useGLTF("/kitchen/scene.gltf");

  return (
    <section className="max-w-[1440px] mx-auto relative xl:pt-[300px]  ">
      <div className="flex flex-col-reverse xl:flex-row relative z-10 items-center gap-20">
        <div className="flex flex-col gap-16 pt-[75px] xl:shrink-0 px-4 xl:px-0">
          <h1 className="text-4xl font-bold leading-[135%] xl:text-7xl xl:p-0 ">
            Build an online reputation <br />
            that actually{" "}
            <span className="text-[#2580eb]">
              converts <br />
              clients
            </span>
            .
          </h1>
          <p className="text-[20px]">
            Our team at Design Flow focus on help you tailor your interior
            design and home decor <br />
            website that your clients love and trust.{" "}
          </p>
          <div className="flex flex-col items-center md:flex-row gap-10">
            <Button variant="normal" text="Chat with us now" url="/contact" />
            <Button variant="ghost" text="View our work" url="/gallery" />
          </div>
        </div>

        <div className="shadow-lg">
          <Canvas
            camera={{ position: [10, 3, 4] }}
            style={{ height: "500px", width: "500px" }}
          >
            <>
              <OrbitControls />
              <primitive object={kitchen.scene} />
              <Environment preset={"city"} />
            </>
          </Canvas>
        </div>
      </div>

      {/* Neon circles */}
      <div className="w-[650px] h-[480px] blur-[300px] bg-[#2580eb] rounded-full bg-opacity-40 absolute top-0 left-36"></div>
      <div className="w-[650px] h-[480px] blur-[300px] bg-[#D1B7F2] rounded-full bg-opacity-50 absolute top-48 left-0"></div>
      <div className="w-[350px] h-[180px] blur-[100px] bg-[#D1B7F2] rounded-full bg-opacity-50 absolute top-0 right-0"></div>
    </section>
  );
};

export default Hero;
