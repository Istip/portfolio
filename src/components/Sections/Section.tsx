"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Text from "../Text/Text";

interface Props {
  children: React.ReactNode;
  number: string;
  title: string;
  colors?: [string, string];
  bg?: string;
}

export default function Section({
  children,
  title,
  number,
  colors = ["text-dark", "text-dark"],
  bg = "bg-primary",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#F9F9F9", "#3EEA8D"]
  );

  return (
    <motion.section
      ref={ref}
      className={`${bg} md:px-[50px] px-5 py-9`}
      style={{ backgroundColor }}
    >
      <div className="flex items-center justify-between text-5xl mb-9">
        <Text type="expanded" className={`${colors[0]}`}>
          {number}
        </Text>
        <Text type="expanded" className={`${colors[1]}`}>
          {title}
        </Text>
      </div>

      <div>{children}</div>
    </motion.section>
  );
}
