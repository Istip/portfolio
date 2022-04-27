import { motion } from 'framer-motion';
import { Center, Text, tokens } from '../UI';
import { HeroHeader } from './HeroDescription.styles';

const HeroDescription = () => {
  const descriptions = [
    'creative developer',
    'based in Romania',
    'working at minic Studio',
  ];

  return (
    <HeroHeader>
      <Center justify="space-between">
        {descriptions.map((description) => (
          <motion.div
            key={description}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
            initial={{ opacity: 0, x: -300 }}
          >
            <Text
              tag="h3"
              key={description}
              variant="bold32"
              color={tokens.colors.primary500}
            >
              {description}
            </Text>
          </motion.div>
        ))}
      </Center>
    </HeroHeader>
  );
};

export default HeroDescription;
