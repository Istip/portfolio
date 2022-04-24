import { Text } from '../UI';
import {
  HeroWrapper as Wrapper,
  HeroContent as Content,
  HeroTop,
} from './Hero.styles';
import { HeroDescription } from './';

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <HeroDescription />

        <HeroTop>
          <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
            pasztor
          </Text>
          <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
            istvan
          </Text>
        </HeroTop>
      </Content>
    </Wrapper>
  );
};

export default Hero;
