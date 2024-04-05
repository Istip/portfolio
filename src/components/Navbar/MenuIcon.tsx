"use client";

import { useState } from "react";
import { useI18n } from "@/locales/client";
import { AnimatePresence } from "framer-motion";
import Text from "../Text/Text";
import Menu from "./Menu";

export default function MenuIcon() {
  const [open, setOpen] = useState(false);
  const t = useI18n();

  return (
    <>
      <AnimatePresence>{open && <Menu setOpen={setOpen} />}</AnimatePresence>
      <li>
        <button
          className="center gap-2 group uppercase"
          onClick={() => setOpen(true)}
        >
          <Text>{t("menu")}</Text>
          <div className="transition-all">
            <div className="h-[1px] w-8 transition-all duration-200 group-hover:w-16 bg-light rounded-full mb-1" />
            <div className="h-[1px] w-8 transition-all duration-200 group-hover:w-16 bg-light rounded-full mb-1" />
            <div className="h-[1px] w-8 transition-all duration-200 group-hover:w-16 bg-light rounded-full" />
          </div>
        </button>
      </li>
    </>
  );
}
