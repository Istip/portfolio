"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScopedI18n } from "@/locales/client";
import AboutScrollerItem from "./AboutScrollerItem";

const AboutScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);

  const t = useScopedI18n("hobby");

  const sections = [
    { title: t("improve.title"), descripton: t("improve.description") },
    { title: t("design.title"), descripton: t("design.description") },
    { title: t("pet.title"), descripton: t("pet.description") },
    { title: t("games.title"), descripton: t("games.description") },
    { title: t("football.title"), descripton: t("football.description") },
    { title: t("bikes.title"), descripton: t("bikes.description") },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] rounded-2xl">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-20 mb-20" style={{ x }}>
          {sections.map(({ title, descripton }, i) => (
            <AboutScrollerItem key={i} title={title} descripton={descripton} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default AboutScroller;
