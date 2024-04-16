"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Text from "@/components/Text/Text";
import { useScopedI18n } from "@/locales/client";

const AboutScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);

  const t = useScopedI18n("hobby");

  const sections = [
    { title: t("improve.title"), descripton: t("improve.description") },
    { title: t("design.title"), descripton: t("design.description") },
    { title: t("pet.title"), descripton: t("games.description") },
    { title: t("games.title"), descripton: t("games.description") },
    { title: t("football.title"), descripton: t("football.description") },
    { title: t("bikes.title"), descripton: t("bikes.description") },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] rounded-2xl">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-20 mb-20" style={{ x }}>
          {sections.map((section, i) => (
            <div
              key={i}
              className="w-[500px] h-full flex items-center flex-col gap-4 text-center p-10"
            >
              <Text
                as="h3"
                type="expandedBold"
                className="text-4xl text-primaryDark uppercase"
              >
                {section.title}
              </Text>
              <Text className="text-2xl text-primaryLight">
                {section.descripton}
              </Text>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default AboutScroller;
