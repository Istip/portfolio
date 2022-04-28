import { motion } from 'framer-motion';
import { Center, Text, tokens } from '../UI';
import {
  HeroContentWrapper as Wrapper,
  HeroText,
  ScrollContainer,
  ScrollContent,
  VerticalLine,
} from './HeroContent.styles';

const HeroContent = () => {
  return (
    <Wrapper>
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

      <ScrollContainer>
        <ScrollContent>
          <Center direction="column">
            <VerticalLine />
            <Text color={tokens.colors.primary700} tag="div">
              scroll for more
            </Text>
          </Center>
        </ScrollContent>
      </ScrollContainer>
    </Wrapper>
  );
};

export default HeroContent;
