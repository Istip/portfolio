import Hero from "@/components/Hero/Hero";
import Section from "@/components/Sections/Section";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";

export default function Home() {
  return (
    <>
      <div className="md:px-[50px] px-5 py-9">
        <Hero />
      </div>

      <Section number={1} title="about">
        <About />
      </Section>

      <Section
        number={2}
        colors={["text-white", "text-white"]}
        title="services"
        from="#3EEA8D"
        to="#111111"
        padding={false}
      >
        <Services />
      </Section>
    </>
  );
}
