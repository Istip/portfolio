import LanguageSelector from "./LanguageSelector";
import Status from "./Status";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-10 p-5 text-light">
      <ul className="flex items-center justify-between mx-auto">
        <Status />
        <ul className="center gap-4">
          <LanguageSelector />
          <MenuIcon />
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
