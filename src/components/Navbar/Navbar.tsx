import LanguageSelector from "./LanguageSelector";
import Icon from "../Icon/Icon";
import Logo from "./Logo";
import Text from "../Text/Text";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-10 p-5 text-light">
      <ul className="flex items-center justify-between mx-auto">
        <Logo />
        <ul className="center gap-4">
          <LanguageSelector />
          <li>
            <button className="center gap-2">
              <Text>MENU</Text>
              <Icon name="menu" />
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
