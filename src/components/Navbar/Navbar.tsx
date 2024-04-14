"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import Status from "./Status";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const bg = pathname !== "/" ? "bg-transparent" : "bg-dark";
  const text = pathname !== "/" ? "text-dark" : "text-light";

  return (
    <header>
      <AnimatePresence>{open && <Menu setOpen={setOpen} />}</AnimatePresence>
      <nav className={`w-full fixed z-10 p-5 ${text}`}>
        <ul className="flex items-center justify-between mx-auto">
          <Status />
          <ul className={`center gap-4 px-2 pb-2 rounded-bl-2xl ${bg}`}>
            <LanguageSelector />
            <MenuIcon setOpen={setOpen} text={text} />
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
