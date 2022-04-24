import React from 'react';
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
          <Text
            tag="h3"
            key={description}
            variant="bold32"
            color={tokens.colors.primary500}
          >
            {description}
          </Text>
        ))}
      </Center>
    </HeroHeader>
  );
};

export default HeroDescription;
