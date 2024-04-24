import Section from "../Section/Section";
import Services from "./Services";

export default function ServicesSection() {
  return (
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
  );
}
