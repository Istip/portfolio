import Section from "../../Section/Section";
import About from "./About";

export default async function AboutSection({
  showTitle = true,
}: {
  showTitle?: boolean;
}) {
  return (
    <Section number={1} title="about" showTitle={showTitle}>
      <About />
    </Section>
  );
}
