import Hero from "@/components/Hero/Hero";
import Section from "@/components/Sections/Section";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";
import Contact from "@/components/Sections/Contact";

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
        from="#111111"
        to="#111111"
        padding={false}
      >
        <Services />
      </Section>

      <Section
        number={3}
        colors={["text-primaryDark", "text-dark"]}
        title="contact"
        from="#F9F9F9"
        to="#F9F9F9"
      >
        <Contact />
      </Section>
    </>
  );
}
