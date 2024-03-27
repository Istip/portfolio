"use client";

import Image from "next/image";
import Text from "../Text/Text";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col gap-10">
      <Text as="h1" type="expanded" className="text-8xl">
        istvan <br /> pasztor
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

      <Text as="h1" type="expanded" className="text-8xl text-right">
        creative <br /> developer
      </Text>
    </section>
  );
};

export default Hero;
