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
        speed={20}
        loop={0}
        className="w-full h-1/2"
      >
        {imageList.slice(0, 4).map(({ src, title, width, height }, index) => (
          <Link href="showcase" key={index}>
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark/50 mr-5 transition-opacity opacity-0 hover:opacity-100 center duration-500">
                <Text as="span" type="expanded" className="text-xs">
                  <div className="px-4 py-2 bg-light border border-dark text-dark rounded-2xl transition-all hover:text-light hover:bg-dark">
                    {title}
                  </div>
                </Text>
              </div>
              <Image
                src={src}
                alt={`${t("showcaseSrc")} 0${index}`}
                width={width}
                height={height}
                className="mr-5 object-cover h-full aspect-square"
              />
            </motion.div>
          </Link>
        ))}
      </Marquee>

      <Marquee
        autoFill
        direction="right"
        speed={20}
        loop={0}
        className="w-full h-1/2"
      >
        {imageList.slice(4).map(({ src, title, width, height }, index) => (
          <Link href="showcase" key={index}>
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark/50 mr-5 transition-opacity opacity-0 hover:opacity-100 center duration-500">
                <Text as="span" type="expanded" className="text-xs">
                  <div className="px-4 py-2 bg-light border border-dark text-dark rounded-2xl transition-all hover:text-light hover:bg-dark">
                    {title}
                  </div>
                </Text>
              </div>
              <Image
                src={src}
                alt={`${t("showcaseSrc")} 0${index}`}
                width={width}
                height={height}
                className="mr-5 object-cover aspect-square"
              />
            </motion.div>
          </Link>
        ))}
      </Marquee>
    </aside>
  );
}
