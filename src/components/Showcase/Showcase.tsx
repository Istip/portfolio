"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import { imageList } from "./images";
import Text from "../Text/Text";
import Link from "next/link";

export default function Showcase() {
  const t = useI18n();

  const variants = {
    hidden: { opacity: 0, transition: { delay: 0.25, duration: 2 } },
    visible: { opacity: 1, transition: { delay: 0.25, duration: 2 } },
  };

  return (
    <aside className="sticky flex flex-col gap-5 top-0 bottom-0 left-0 right-0 w-full h-screen bg-dark p-5">
      <Marquee
        autoFill
        direction="left"
        speed={50}
        loop={0}
        className="w-full h-1/2"
      >
        {imageList.slice(0, 7).map(({ src, title, width, height }, index) => (
          <motion.div
            key={index}
            className="relative"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark/75 mr-5 transition-opacity opacity-0 hover:opacity-100 center duration-500">
              <Text
                as="span"
                type="expandedBlack"
                className="text-xs text-light"
              >
                {title}
              </Text>
            </div>
            <Image
              src={src}
              alt={`${t("showcaseSrc")} 0${index}`}
              width={width}
              height={height}
              className="mr-5 h-full"
            />
          </motion.div>
        ))}
      </Marquee>

      <Marquee
        autoFill
        direction="right"
        speed={50}
        loop={0}
        className="w-full h-1/2"
      >
        {imageList.slice(7).map(({ src, title, width, height }, index) => (
          <motion.div
            key={index}
            className="relative"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark/75 mr-5 transition-opacity opacity-0 hover:opacity-100 center duration-500">
              <Text
                as="span"
                type="expandedBlack"
                className="text-xs text-light"
              >
                {title}
              </Text>
            </div>
            <Image
              src={src}
              alt={`${t("showcaseSrc")} 0${index}`}
              width={width}
              height={height}
              className="mr-5 h-full"
            />
          </motion.div>
        ))}
      </Marquee>
    </aside>
  );
}
