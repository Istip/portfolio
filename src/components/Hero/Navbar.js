import { Button, Text } from '../UI';
import { NavbarContent, NavbarWrapper } from './Navbar.styles';

const Navbar = () => {
  // Array of buttons to render
  const buttons = [
    {
      text: 'about',
      margin: '0 10px 0 0',
      onClick: () => {},
    },
    {
      text: 'work',
      margin: '0 10px 0 0',
      onClick: () => {},
    },
    {
      text: 'contact',
      variant: 'secondary',
      onClick: () => {},
    },
  ];

  return (
    <NavbarWrapper>
      <NavbarContent>
        <Text tag="div" variant="black32">
          ISTI
        </Text>
        <div>
          <div>
            {buttons.map((button) => (
              <Button
                key={button.text}
                variant={button.variant}
                margin={button.margin}
                onClick={button.onClick}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
