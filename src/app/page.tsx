import Form from "@/components/Form";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Processes from "@/components/Processes";

export default function Home() {
  return (
    <main className="relative">
      <div className="">
        <Hero />
        <Problem />
        <Help />
        <Processes />
        <Form />
      </div>
    </main>
  );
}
