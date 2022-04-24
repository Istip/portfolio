import { Parallax } from 'react-scroll-parallax';
import { Center, Text, tokens } from '../UI';
import {
  HeroImage,
  HeroText,
  HeroTitle as Wrapper,
  ScrollContainer,
  VerticalLine,
} from './HeroContent.styles';

const HeroContent = () => {
  return (
    <Wrapper>
      <Parallax speed={20}>
        <HeroImage className="hero-image" />
      </Parallax>

      <Parallax speed={-10}>
        <HeroText>
          <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
            pasztor
          </Text>
          <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
            istvan
          </Text>

          <Text tag="h3" variant="black32" color={tokens.colors.primary100}>
            valami short description hogy mit is csinalok kb
          </Text>
        </HeroText>
      </Parallax>

      <ScrollContainer>
        <Center direction="column">
          <VerticalLine />
          <Text color={tokens.colors.primary700}>scroll for more</Text>
        </Center>
      </ScrollContainer>
    </Wrapper>
  );
};

export default HeroContent;
