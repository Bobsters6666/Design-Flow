import Button from "@/components/Button";
import Form from "@/components/Form";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Processes from "@/components/Processes";
import ServiceHomepage from "@/components/ServiceHomepage";

export default function Home() {
  return (
    <main className="relative mb-auto">
      <div className="">
        <Hero />
        <Problem />
        <Help />
        <ServiceHomepage />
        <Processes />
        <Form />
      </div>
    </main>
  );
}
