"use client";

import { useEffect, useState } from "react";
import { useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { MenuItem, MenuItemTranslation, menuItems } from "./menuItem";
import Icon from "../Icon/Icon";
import Link from "next/link";
import Text from "../Text/Text";
import Tooltip from "../Tooltip/Tooltip";
import Additional from "./Additional";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export default function Menu({ setOpen, open }: Props) {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [hovered, setHovered] = useState(false);

  const scopedTooltip = useScopedI18n("menuItemsTooltip");
  const scopedMenu = useScopedI18n("menuItems");

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const li = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: "100vw" }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 w-full h-full z-[9999] center text-light"
      onClick={() => setOpen(false)}
    >
      <button
        className="absolute right-6 top-6 pl-6 z-[100000]"
        onClick={() => setOpen(false)}
      >
        <Icon name="close" />
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full backdrop-blur-[16px]">
        <motion.div
          className={`center transition-colors ease-in-out px-10 ${
            selected?.bg ?? "bg-primary"
          }`}
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 0.8, backdropFilter: "blur(64px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-full h-full flex items-start lg:items-center justify-center lg:justify-between py-10 flex-col">
            <div className="hidden lg:block">
              {selected ? (
                <Icon name={selected ? selected.icon : "home"} size={100} />
              ) : (
                <div />
              )}
            </div>
            <Additional />
          </div>
        </motion.div>

        <div className="col-span-2 bg-dark flex items-center p-10 text-left">
          <motion.ul
            className="flex flex-col"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {menuItems.map((item) => (
              <motion.li key={item.id} className="my-2" variants={li}>
                <Link
                  href={item.link}
                  onMouseEnter={() => setSelected(item as MenuItem)}
                  onMouseLeave={() => setSelected(null)}
                >
                  <Tooltip
                    variant="primary"
                    content={scopedTooltip(item.name as MenuItemTranslation)}
                  >
                    <Text
                      type="expandedBlack"
                      className={`uppercase text-2xl sm:text-5xl md:text-6xl xl:text-7xl transition-all ${
                        hovered && selected !== item
                          ? "opacity-10 pl-0 lg:pl-5"
                          : ""
                      }`}
                    >
                      {scopedMenu(item.name as MenuItemTranslation)}
                    </Text>
                  </Tooltip>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
