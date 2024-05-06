"use client";

import Text from "@/components/Text/Text";
import { useScopedI18n } from "@/locales/client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Description, Title } from "./types";

interface Props {
  title: string;
  descripton: string;
}

export default function AboutScrollerItem({ title, descripton }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px -70% 0px -20%" });

  const t = useScopedI18n("hobby");

  return (
    <div
      ref={ref}
      className={`${
        isInView
          ? "opacity-100 scale-100 bg-primaryLight/70"
          : "opacity-10 scale-50 bg-light/10"
      } transition-all duration-500 rounded-2xl w-[200px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-full flex items-center flex-col gap-4 p-10`}
    >
      <Text
        as="h3"
        type="expandedBold"
        className="text-sm md:text-4xl text-dark uppercase pb-2 rounded-2xl w-full text-left"
      >
        {t(title as Title)}
      </Text>
      <Text className="text-xs sm:text-2xl text-dark/50">
        {t(descripton as Description)}
      </Text>
    </div>
  );
}
