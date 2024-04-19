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
        isInView ? "opacity-100 scale-100" : "opacity-10 scale-50"
      } transition-all duration-500 w-[500px] h-full flex items-center flex-col gap-4 text-center p-10`}
    >
      <Text
        as="h3"
        type="expandedBold"
        className="text-4xl text-light uppercase px-4 py-2 rounded-2xl bg-primaryDark"
      >
        {title}
      </Text>
      <Text className="text-2xl text-primaryLight">{descripton}</Text>
    </div>
  );
}
