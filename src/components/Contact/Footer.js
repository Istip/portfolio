import {
  FooterWrapper as Wrapper,
  FooterTitle as Title,
  ButtonGroup,
} from './Footer.styles';
import { Text, Button, tokens } from '../UI/';

const Footer = () => {
  const buttons = [
    {
      text: 'about me section',
      onClick: () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      text: 'check out my work',
      onClick: () => {
        document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

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
    </Wrapper>
  );
};

export default Footer;
