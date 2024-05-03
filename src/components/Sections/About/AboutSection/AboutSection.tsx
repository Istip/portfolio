import Section from "../../Section/Section";
import AboutIntro from "./AboutIntro";
import AboutCards from "./AboutCards";

export default async function AboutSection({
  showTitle = true,
}: {
  showTitle?: boolean;
}) {
  return (
    <Section number={1} title="about" showTitle={showTitle}>
      <AboutIntro />
      <AboutCards />
    </Section>
  );
}
