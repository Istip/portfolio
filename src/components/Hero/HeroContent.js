import { Parallax } from 'react-scroll-parallax';
import { Text, tokens } from '../UI';
import { HeroImage, HeroText, HeroTitle } from './HeroContent.styles';

const HeroContent = () => {
  return (
    <>
      <HeroTitle>
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

            <Text tag="h3" variant="black32" color={tokens.colors.primary600}>
              valami short description hogy mit is csinalok kb
            </Text>
          </HeroText>
        </Parallax>
      </HeroTitle>
    </>
  );
};

export default HeroContent;
