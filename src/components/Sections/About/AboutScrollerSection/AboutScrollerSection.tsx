"use client";

import { useScopedI18n } from "@/locales/client";
import Section from "../../Section/Section";
import AboutScroller from "./AboutScroller";
import useWindowSize from "@/hooks/useWindowSize";
import Marquee from "react-fast-marquee";
import FreeTime from "./FreeTime";
import Text from "@/components/Text/Text";

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
        <div className="h-screen center">
          <Marquee autoFill direction="left" speed={100} loop={0} pauseOnHover>
            {sections.map(({ title, descripton }, index) => (
              <div
                className="p-10 mr-10 rounded-2xl flex flex-col h-full max-w-72 sm:max-w-96"
                key={index}
              >
                <Text
                  as="h3"
                  type="expandedBold"
                  className="text-sm sm:text-4xl text-dark uppercase pb-2 rounded-2xl w-full text-left"
                >
                  {title}
                </Text>
                <Text className="text-xs sm:text-2xl text-dark">
                  {descripton}
                </Text>
              </div>
            ))}
          </Marquee>
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
