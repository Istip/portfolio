"use client";

import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "../Text/Text";
import DoubleButton from "../Button/DoubleButton";
import Tooltip from "../Tooltip/Tooltip";

export default function Hero() {
  const t = useI18n();

  return (
    <section>
      <div className="flex flex-col justify-center gap-10 pb-6 h-hero">
        <Tooltip variant="dark" content={t("myName")}>
          <Text as="h1" type="expanded" className="text-8xl lowercase">
            {t("firstName")} <br /> {t("lastName")}
          </Text>
        </Tooltip>

        <motion.div
          className="border border-dark"
          initial={{ height: 0 }}
          animate={{ height: "30vh" }}
          transition={{ duration: 0.75 }}
        >
          <Image
            src="/images/cover.webp"
            width={1600}
            height={800}
            alt="It's me, Isti."
            className="w-full h-full object-cover"
          />
        </motion.div>

        <Text as="h1" type="expanded" className="text-8xl text-right lowercase">
          {t("creative")} <br /> {t("developer")}
        </Text>
      </div>

      <div className="center gap-2 py-5">
        <DoubleButton className="bg-light border border-dark text-dark hover:bg-dark hover:text-light">
          {t("about")}
        </DoubleButton>
        <DoubleButton withIcon className="bg-primary text-dark">
          {t("contact")}
        </DoubleButton>
      </div>
    </section>
  );
}
