import React from "react";
import LanguageSelector from "./LanguageSelector";
import Icon from "../Icon/Icon";

const Navbar = () => {
  return (
    <div className="w-full bg-stone-100 p-5">
      <ul className="flex items-center justify-between mx-auto">
        <li>LOGO</li>
        <ul className="center gap-4">
          <li>
            <LanguageSelector />
          </li>
          <li className="center gap-2">
            <div>MENU</div>
            <div>
              <Icon name="menu" />
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
