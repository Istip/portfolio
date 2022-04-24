import { useState } from 'react';
import { Button, Center, Icon, Text, tokens } from '../UI';
import {
  NavbarAnchor as Anchor,
  NavbarContent as Content,
  NavbarWrapper as Wrapper,
} from './Navbar.styles';

const Navbar = () => {
  const [background, setBackground] = useState(tokens.colors.primary400);

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
    <Wrapper
      background={background}
      onClick={() =>
        setBackground(
          background === tokens.colors.primary400
            ? tokens.colors.white
            : tokens.colors.primary400
        )
      }
    >
      <Content>
        <Text tag="div" variant="black32">
          ISTI
        </Text>
        <Center>
          <Center>
            {icons.map((icon) => (
              <Anchor key={icon.name} target="_blank" href={icon.route}>
                <Icon icon={icon.name} color={tokens.colors.primary700} />
              </Anchor>
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
      </Content>
    </Wrapper>
  );
};

export default Navbar;
