import {
  FooterWrapper as Wrapper,
  FooterTitle as Title,
  ButtonGroup,
} from './Footer.styles';
import { Text, Button, tokens } from '../UI/';

const Footer = () => {
  return (
    <Wrapper>
      <Title>
        <Text tag="h3" variant="bold24" color={tokens.colors.primary200}>
          GO BACK TO
        </Text>
      </Title>

      <ButtonGroup>
        <Button>about me section</Button>
        <Button>check out my work</Button>
      </ButtonGroup>

      <Text tag="h3" variant="bold24" color={tokens.colors.primary200}>
        CHECK ME OUT AT
      </Text>
    </Wrapper>
  );
};

export default Footer;
