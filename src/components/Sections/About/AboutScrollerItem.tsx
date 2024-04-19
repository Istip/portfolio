"use client";

import Text from "@/components/Text/Text";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  descripton: string;
}

export default function AboutScrollerItem({ title, descripton }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px -70% 0px -20%" });

  return (
    <div
      ref={ref}
      className={`${
        isInView
          ? "opacity-100 scale-100 bg-light/70"
          : "opacity-10 scale-5 bg-light/10"
      } transition-all duration-500 rounded-2xl w-[500px] h-full flex items-center flex-col gap-4 p-10`}
    >
      <Text
        as="h3"
        type="expandedBold"
        className="text-4xl text-primaryDark uppercase pb-2 rounded-2xl w-full text-left"
      >
        {title}
      </Text>
      <Text className="text-2xl text-dark">{descripton}</Text>
    </div>
  );
}
