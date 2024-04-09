import Hero from "@/components/Hero/Hero";
import Section from "@/components/Sections/Services/Section";
import About from "@/components/Sections/About/About";
import Services from "@/components/Sections/Services";
import Contact from "@/components/Sections/Contact/Contact";
import AboutScroller from "@/components/Sections/About/AboutScroller";
import Showcase from "@/components/Showcase/Showcase";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="pt-20">
        <div className="md:px-[50px] px-5 py-9">
          <Hero />
        </div>

        <Section number={1} title="about">
          <About />
        </Section>

        <Section from="#3EEA8D" to="#111111">
          <AboutScroller />
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
          from="#F2F0EF"
          to="#F2F0EF"
        >
          <Contact />
        </Section>

        <Footer />
      </div>
      <Showcase />
    </div>
  );
}
