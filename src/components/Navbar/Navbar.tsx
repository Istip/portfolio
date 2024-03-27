import LanguageSelector from "./LanguageSelector";
import Icon from "../Icon/Icon";
import Logo from "./Logo";
import Text from "../Text/Text";

const Navbar = () => {
  return (
    <div className="w-full p-5">
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
    </div>
  );
};

export default Navbar;
