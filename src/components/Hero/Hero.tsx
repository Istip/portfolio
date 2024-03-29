"use client";

import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";
import DoubleButton from "../Button/DoubleButton";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";
import MaskText from "../Text/MaskText";

export default function Hero() {
  const t = useI18n();

  return (
    <section>
      <div className="flex flex-col justify-center gap-10 pb-6 h-hero">
        <Tooltip variant="dark" content={t("myName")}>
          <MaskText>{t("firstName")}</MaskText>
          <MaskText>{t("lastName")}</MaskText>
        </Tooltip>

        <motion.div
          className="border border-dark"
          initial={{ height: 0 }}
          animate={{ height: "30vh" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src="/images/cover.webp"
            width={1600}
            height={800}
            alt="It's me, Isti."
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-right">
          <MaskText>{t("creative")}</MaskText>
          <MaskText>{t("developer")}</MaskText>
        </div>
      </div>

      <div className="center gap-2 py-5">
        <Link href="about" className="w-full">
          <DoubleButton className="bg-light border border-dark text-dark hover:bg-dark hover:text-light">
            {t("about")}
          </DoubleButton>
        </Link>
        <Link href="contact" className="w-full">
          <DoubleButton withIcon className="bg-primary text-dark">
            {t("contact")}
          </DoubleButton>
        </Link>
      </div>
    </section>
  );
}
