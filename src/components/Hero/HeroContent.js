import { motion } from 'framer-motion';
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
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 300 }}
          drag="x"
          dragConstraints={{ left: 0, right: 100 }}
        >
          <HeroImage />
        </motion.div>
      </Parallax>

      <Parallax speed={-10}>
        <HeroText>
          <motion.div
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2 },
            }}
            initial={{ opacity: 0, y: 400 }}
          >
            <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
              pasztor
            </Text>
          </motion.div>

          <motion.div
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3 },
            }}
            initial={{ opacity: 0, y: 400 }}
          >
            <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
              istvan
            </Text>
          </motion.div>

          <motion.div
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5 },
            }}
            initial={{ opacity: 0, y: 200 }}
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
