import { Button, Center, Icon, Text, tokens } from '../UI';
import {
  NavbarAnchor as Anchor,
  NavbarContent as Content,
  NavbarWrapper as Wrapper,
} from './Navbar.styles';
import { icons, buttons } from './navbarData';

const Navbar = ({ background, ...props }) => {
  const headerColor =
    background === tokens.colors.primary700
      ? tokens.colors.white
      : tokens.colors.primary700;

  const handleLogoClick = () => {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper
      {...props}
      background={background}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Content>
        <Text
          tag="div"
          variant="black32"
          color={headerColor}
          onClick={handleLogoClick}
        >
          <span style={{ cursor: 'pointer' }}>ISTI</span>
        </Text>
        <Center>
          <Center>
            {icons.map((icon) => (
              <Anchor key={icon.name} target="_blank" href={icon.route}>
                <Icon icon={icon.name} color={headerColor} />
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
