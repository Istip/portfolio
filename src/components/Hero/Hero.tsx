"use client";

import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";
import DoubleButton from "../Button/DoubleButton";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";
import MaskText from "../Text/MaskText";
import Text from "../Text/Text";

export default function Hero() {
  const t = useI18n();

  return (
    <section className="md:px-[50px] px-5 pb-9">
      <div className="flex flex-col justify-center gap-10 h-screen -mt-[60px]">
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
            alt={t("coverAlt")}
            placeholder="blur"
            blurDataURL="/images/cover.webp"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-right">
          <MaskText>{t("creative")}</MaskText>
          <MaskText>{t("developer")}</MaskText>
        </div>
      </div>

      <Text className="text-2xl text-stone-500 hover:text-primaryDark transition-colors duration-500 py-8">
        {t("mottoLine1")}
        <br />
        {t("mottoLine2")}
      </Text>

      <div className="center gap-2 py-5 flex-col xl:flex-row">
        <Link href="about" className="w-full">
          <DoubleButton className="bg-white border border-dark text-dark hover:bg-dark hover:text-light">
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
