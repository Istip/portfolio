import { Button, Text } from '../UI';
import { NavbarContent, NavbarWrapper } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Text tag="div" variant="black32">
          ISTI
        </Text>
        <div>
          <div>
            <Button margin="0 10px 0 0">about</Button>
            <Button>work</Button>
            <Button variant="secondary">contact</Button>
          </div>
        </div>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
