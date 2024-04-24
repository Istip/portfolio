import Section from "../../Section/Section";
import About from "./About";

export default async function AboutSection() {
  return (
    <Section number={1} title="about">
      <About />
    </Section>
  );
}
