import { Fragment } from "react";
import Hero from "@/components/Hero/Hero";
import Section from "@/components/Sections/Section";
import About from "@/components/Sections/About";

export default function Home() {
  return (
    <>
      <div className="md:px-[50px] px-5 py-9">
        <Hero />
      </div>

      <Section number={1} title="about">
        <About />
      </Section>

      <Section number={2} title="services" from="#3EEA8D" to="#111111">
        <About />
      </Section>
    </>
  );
}
