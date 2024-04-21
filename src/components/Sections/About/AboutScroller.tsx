"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n, useScopedI18n } from "@/locales/client";
import AboutScrollerItem from "./AboutScrollerItem";
import Icon from "@/components/Icon/Icon";
import Text from "@/components/Text/Text";

const AboutScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);

  const scopedT = useScopedI18n("hobby");
  const t = useI18n();

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

  return (
    <section ref={targetRef} className="relative h-[300vh] rounded-2xl">
      <Text type="expandedBold" className="text-3xl md:p-[50px] p-5">
        {t("freeTime")}
      </Text>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-1/2 left-0 bottom-1/2 my-auto">
          <div className="p-0.5 center ml-2 rounded-full bg-light text-dark border border-dark opacity-50">
            <Icon name="arrowDown" />
          </div>
        </div>
        <motion.div className="center gap-40 mb-20" style={{ x }}>
          {sections.map(({ title, descripton }, i) => (
            <AboutScrollerItem key={i} title={title} descripton={descripton} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default AboutScroller;
