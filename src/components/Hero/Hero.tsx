"use client";

import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "../Text/Text";
import DoubleButton from "../Button/DoubleButton";

export default function Hero() {
  const t = useI18n();

  return (
    <section className="flex flex-col gap-10 pb-6">
      <Text as="h1" type="expanded" className="text-8xl lowercase">
        {t("firstName")} <br /> {t("lastName")}
      </Text>

      <motion.div
        className="w-full relative overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
      >
        <Image
          src="/images/cover.png"
          width={1600}
          height={800}
          alt="Cover image"
        />
      </motion.div>

      <Text as="h1" type="expanded" className="text-8xl text-right lowercase">
        {t("creative")} <br /> {t("developer")}
      </Text>

      <div className="center gap-2">
        <DoubleButton className="bg-light border border-dark text-dark">
          <Text type="expandedBold" className="uppercase">
            {t("about")}
          </Text>
        </DoubleButton>
        <DoubleButton left className="bg-primary text-dark">
          <Text type="expandedBold" className="uppercase">
            {t("contact")}
          </Text>
        </DoubleButton>
      </div>
    </section>
  );
}
