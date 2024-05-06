"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import Text from "../Text/Text";
import useWindowSize from "@/hooks/useWindowSize";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  variant?: "light" | "dark" | "primary" | "plain";
  full?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  variant = "primary",
  full = true,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { width } = useWindowSize();

  const smallerScreen = width && width < 1024;

  const variants = [
    {
      name: "light",
      style: "bg-light border border-dark text-dark",
    },
    {
      name: "dark",
      style: "bg-dark border border-dark text-light",
    },
    {
      name: "primary",
      style: "bg-primary border border-primary text-dark",
    },
    {
      name: "plain",
      style: "bg-transparent border border-transparent text-primaryDark",
    },
  ];

  const selectedVariant = variants.find((v) => v.name === variant);

  const fullStyle = !full ? "rounded-2xl p-0" : "rounded-full px-3 py-2";

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const springX = useSpring(cursorX, { stiffness: 500, damping: 90 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 90 });

  const tooltipX = useTransform(springX, (x) => x + 8);
  const tooltipY = useTransform(springY, (y) => y + 16);

  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>

      <AnimatePresence>
        {showTooltip && !smallerScreen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipVariants}
            className={`${selectedVariant?.style} ${fullStyle} rounded-tl-none fixed overflow-hidden text-xs font-normal pointer-events-none z-[999999]`}
            style={{
              top: tooltipY,
              left: tooltipX,
            }}
          >
            <Text as="div" className={`${full ? "rounded-2xl" : ""}`}>
              {content}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
