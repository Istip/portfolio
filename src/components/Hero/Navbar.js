import { Button, Center, Icon, Text, tokens } from '../UI';
import { NavbarAnchor, NavbarContent, NavbarWrapper } from './Navbar.styles';

const Navbar = () => {
  // Array of icons to render
  const icons = [
    { name: 'facebook', route: 'https://www.google.com/' },
    { name: 'instagram', route: 'https://www.google.com/' },
    { name: 'github', route: 'https://www.google.com/' },
  ];

  // Array of buttons to render
  const buttons = [
    {
      text: 'about',
      margin: '0 10px',
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
        <Center>
          <Center>
            {icons.map((icon) => (
              <NavbarAnchor key={icon.name} target="_blank" href={icon.route}>
                <Icon icon={icon.name} color={tokens.colors.primary700} />
              </NavbarAnchor>
            ))}
          </Center>

          <Center>
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
          </Center>
        </Center>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
