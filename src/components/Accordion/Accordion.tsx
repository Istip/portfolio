"use client";

import { AnimatePresence, motion } from "framer-motion";
import Icon, { IconName } from "../Icon/Icon";
import Text from "../Text/Text";
import Tooltip from "../Tooltip/Tooltip";
import { useI18n } from "@/locales/client";

interface Props {
  text: React.ReactNode | string;
  content?: React.ReactNode | string;
  className?: string;
  children: React.ReactNode;
  selected: number | boolean;
  setSelected: React.Dispatch<React.SetStateAction<number | boolean>>;
  id: number;
  icon: IconName;
}
export default function Accordion({
  text,
  className,
  children,
  selected,
  setSelected,
  id,
  icon,
}: Props) {
  const isSelected = selected === id;

  const t = useI18n();

  const tooltipContent = !isSelected ? t("clickToOpen") : t("clickToClose");

  return (
    <div
      onClick={() => setSelected(isSelected ? false : id)}
      className="select-none"
    >
      <Tooltip variant="light" content={`${tooltipContent} ${text}`}>
        <div
          className={` w-full transition-all ease-in-out duration-500 cursor-pointer flex flex-col hover:text-dark 
       relative overflow-hidden group md:px-[50px] px-5 py-10 hover:pl-0 hover:pr-0 ${
         className ?? ""
       } ${isSelected ? "bg-primary text-dark" : "text-primary"}`}
        >
          <div className="flex items-center justify-between gap-10 lowercase">
            <div className="relative z-[1] text-4xl tracking-tighter font-black center gap-2">
              <Icon name={icon} />
              <Text as="div" type="expandedExtraLight">
                {text}
              </Text>
            </div>
            <div className="relative font-light text-base z-[1] transition-all text-transparent group-hover:text-dark">
              •
            </div>
          </div>
          <div
            className={`absolute right-0 transition-all ease-in-out duration-500 top-1/2    h-0 group-hover:h-full bg-primary w-full`}
          />
          <div
            className={`absolute right-0 transition-all ease-in-out duration-500 bottom-1/2 h-0 group-hover:h-full bg-primary w-full`}
          />
        </div>
        <AnimatePresence mode="wait">
          {isSelected && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="md:px-[50px] px-5 pb-10 bg-primary h-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Text as="div" className="text-dark space-y-4">
                    {children}
                  </Text>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Tooltip>
    </div>
  );
}
