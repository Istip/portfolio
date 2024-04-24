"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Text from "./Text";

interface Props {
  once?: boolean;
  children: React.ReactNode | string;
  className?: string;
}

const MaskText: React.FC<Props> = ({ once = false, children, className }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const ref = useRef(null);

  const inView = useInView(ref, {
    once,
    margin: "-10%",
  });

  return (
    <div ref={ref}>
      <div className="overflow-hidden">
        <motion.div
          variants={animation}
          initial="initial"
          animate={inView ? "enter" : ""}
          className={`${className} m-0`}
        >
          <Text
            as="h1"
            type="expanded"
            className="text-7xl md:text-8xl lowercase py-1"
          >
            {children}
          </Text>
        </motion.div>
      </div>
    </div>
  );
};

export default MaskText;
