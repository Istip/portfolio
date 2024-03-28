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

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  variant?: "light" | "dark" | "primary";
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  variant = "primary",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const variants = [
    { name: "light", style: "bg-light border border-dark text-dark" },
    { name: "dark", style: "bg-dark border border-dark text-light" },
    { name: "primary", style: "bg-primary border border-primary text-dark" },
  ];

  const selectedVariant = variants.find((v) => v.name === variant);

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
      transition: {
        type: "spring",
      },
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
        {showTooltip && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipVariants}
            className={`${selectedVariant?.style} px-3 py-2 text-xs font-normal rounded-full rounded-tl-none`}
            style={{
              position: "fixed",
              top: tooltipY,
              left: tooltipX,
            }}
          >
            <Text>{content}</Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
