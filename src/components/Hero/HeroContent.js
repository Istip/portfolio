import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
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
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          initial={{ opacity: 0, x: -300 }}
        >
          <HeroImage className="hero-image" />
        </motion.div>
      </Parallax>

      <Parallax speed={-10}>
        <HeroText>
          <motion.div
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2 },
            }}
            exit={{
              opacity: 0,
              x: 400,
              transition: { delay: 0.2 },
            }}
            initial={{ opacity: 0, x: -400 }}
          >
            <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
              pasztor
            </Text>
            <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
              istvan
            </Text>
          </motion.div>

          <motion.div
            animate={{
              opacity: 1,
              x: 0,
              transition: {  delay: 0.4 },
            }}
            exit={{
              opacity: 0,
              x: 200,
              transition: {  delay: 0.4 },
            }}
            initial={{ opacity: 0, x: -200 }}
          >
            <Text tag="h3" variant="black32" color={tokens.colors.primary100}>
              valami short description hogy mit is csinalok kb
            </Text>
          </motion.div>
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
