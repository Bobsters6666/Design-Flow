import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero />
        <Problem />
      </div>
    </main>
  );
}
