"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] rounded-2xl mt-40 mx-2 md:mx-5 my-10"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-40 mb-20" style={{ x }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[500px] h-[500px] bg-primaryDark rounded-2xl flex"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default AboutScroller;
