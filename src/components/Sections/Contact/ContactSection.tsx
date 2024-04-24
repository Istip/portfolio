import Section from "../Section/Section";
import Contact from "./Contact";

export default function ContactSection() {
  return (
    <Section
      number={3}
      colors={["text-primaryDark", "text-dark"]}
      title="contact"
      from="#F2F0EF"
      to="#F2F0EF"
    >
      <Contact />
    </Section>
  );
}
