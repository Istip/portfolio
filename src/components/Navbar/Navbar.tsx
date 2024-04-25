"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import Status from "./Status";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";
import NavbarRoundel from "./NavbarRoundel";
import Lenis from "@/utils/lenis";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const bg = pathname !== "/" ? "bg-transparent" : "lg:bg-dark bg-transparent";
  const text = pathname !== "/" ? "text-dark" : "lg:text-light text-dark";

  return (
    <>
      {!open && <Lenis />}
      <header>
        <AnimatePresence>
          {open && <Menu setOpen={setOpen} open={open} />}
        </AnimatePresence>
        <nav
          className={`w-full fixed z-10 p-5 pb-5 md:pb-0 flex items-center rounded-b-2xl md:rounded-none md:bg-transparent bg-light justify-between mx-auto ${text}`}
        >
          <Status />
          <div className="flex flex-col justify-end items-end">
            <div className="flex">
              <div className="text-dark">
                <NavbarRoundel />
              </div>
              <ul
                className={`center gap-4 lg:px-2 lg:pb-2 rounded-bl-2xl  ${bg}`}
              >
                <LanguageSelector />
                <MenuIcon setOpen={setOpen} text={text} />
              </ul>
            </div>
            <NavbarRoundel />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
