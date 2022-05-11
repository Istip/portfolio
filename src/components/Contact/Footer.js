import {
  FooterWrapper as Wrapper,
  FooterTitle as Title,
  ButtonGroup,
  FooterLink,
  LinkGroup,
} from './Footer.styles';
import { Text, Button, Icon, tokens } from '../UI/';
import { buttons, links } from './footerData.js';

const Footer = () => {
  return (
    <Wrapper>
      <Title>
        <Text tag="h3" variant="bold24" color={tokens.colors.primary200}>
          GO BACK TO
        </Text>
      </Title>

      <ButtonGroup>
        {buttons.map(({ text, onClick }) => (
          <Button key={text} onClick={onClick}>
            {text}
          </Button>
        ))}
      </ButtonGroup>

      <Text tag="h3" variant="bold24" color={tokens.colors.primary200}>
        CHECK ME OUT AT
      </Text>

      <LinkGroup>
        {links.map((link) => (
          <FooterLink href={link.route} target="_blank" key={link.text}>
            <Icon icon={link.text} color={tokens.colors.primary400} />
            <Text tag="div" color={tokens.colors.primary400} variant="button">
              {link.text}
            </Text>
          </FooterLink>
        ))}
      </LinkGroup>
    </Wrapper>
  );
};

export default Footer;
