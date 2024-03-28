import LanguageSelector from "./LanguageSelector";
import Status from "./Status";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-10 p-5 text-light">
      <ul className="flex items-center justify-between mx-auto">
        <Status />
        <ul className="center gap-4">
          <LanguageSelector />
          <Menu />
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
