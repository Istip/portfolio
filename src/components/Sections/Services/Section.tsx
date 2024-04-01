"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScopedI18n } from "@/locales/client";
import Text from "../../Text/Text";

interface Props {
  children: React.ReactNode;
  number?: number;
  title?: "about" | "services" | "contact";
  colors?: [string, string];
  from?: string;
  to?: string;
  padding?: boolean;
}

export default function Section({
  children,
  title,
  number,
  colors = ["text-dark", "text-dark"],
  from = "#F2F0EF",
  to = "#3EEA8D",
  padding = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const t = useScopedI18n("sections");

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 0.5], [from, to]);

  return (
    <motion.section ref={ref} className="" style={{ backgroundColor }}>
      {title && number && (
        <div className="flex items-center justify-between text-5xl mb-9 md:px-[50px] px-5 py-9 lowercase">
          <Text type="expanded" className={`${colors[0]}`}>
            {`0${number}`}
          </Text>
          <Text as="h2" type="expanded" className={`${colors[1]}`}>
            {t(title)}
          </Text>
        </div>
      )}

      <div className={`py-9 ${padding ? "md:px-[50px] px-5" : ""}`}>
        {children}
      </div>
    </motion.section>
  );
}
