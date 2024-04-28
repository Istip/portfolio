"use client";

import Section from "../../Section/Section";
import AboutScroller from "./AboutScroller";
import useWindowSize from "@/hooks/useWindowSize";
import FreeTime from "./FreeTime";
import AboutScrollerMarquee from "./AboutScrollerMarquee";
import { sections } from "./sections";

export default function AboutScrollerSection() {
  const { width } = useWindowSize();
  const largeScreen = width && width >= 1024;

  if (!largeScreen) {
    return (
      <Section from="#b8b8ff" to="#b8b8ff" padding={false}>
        <FreeTime />
        <div className="min-h-screen center flex-col">
          <AboutScrollerMarquee sections={sections.slice(0, 2)}>
            HI!
          </AboutScrollerMarquee>
          <AboutScrollerMarquee
            direction="right"
            sections={sections.slice(2, 4)}
          >
            SZIA!
          </AboutScrollerMarquee>
          <AboutScrollerMarquee first sections={sections.slice(4)}>
            SALUT!
          </AboutScrollerMarquee>
        </div>
      </Section>
    );
  }

  return (
    <Section from="#b8b8ff" to="#111111" padding={false}>
      <AboutScroller sections={sections} />
    </Section>
  );
}
