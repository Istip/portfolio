import { HeroWrapper as Wrapper, HeroMain as Main } from './Hero.styles';
import { HeroDescription, HeroContent } from './';

const Hero = () => {
  return (
    <Wrapper>
      <Main>
        <HeroDescription />
        <HeroContent />
      </Main>
    </Wrapper>
  );
};

export default Hero;
