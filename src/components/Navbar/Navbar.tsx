import React from "react";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <div className="w-full bg-stone-100 p-5">
      <ul className="flex items-center justify-between mx-auto">
        <li>LOGO</li>
        <ul className="center gap-2">
          <li>
            <LanguageSelector />
          </li>
          <li>MENU</li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
