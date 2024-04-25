"use client";

import { useScopedI18n } from "@/locales/client";
import Section from "../../Section/Section";
import AboutScroller from "./AboutScroller";
import useWindowSize from "@/hooks/useWindowSize";
import FreeTime from "./FreeTime";
import AboutScrollerMarquee from "./AboutScrollerMarquee";

export default function AboutScrollerSection() {
  const { width } = useWindowSize();
  const largeScreen = width && width >= 1024;

  const scopedT = useScopedI18n("hobby");

  const sections = [
    {
      title: scopedT("improve.title"),
      descripton: scopedT("improve.description"),
    },
    {
      title: scopedT("design.title"),
      descripton: scopedT("design.description"),
    },
    {
      title: scopedT("pet.title"),
      descripton: scopedT("pet.description"),
    },
    {
      title: scopedT("games.title"),
      descripton: scopedT("games.description"),
    },
    {
      title: scopedT("football.title"),
      descripton: scopedT("football.description"),
    },
    {
      title: scopedT("bikes.title"),
      descripton: scopedT("bikes.description"),
    },
  ];

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
