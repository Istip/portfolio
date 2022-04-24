import React from 'react';
import { Text } from '../UI';
import { HeroImage, HeroText, HeroTitle } from './HeroContent.styles';

const HeroContent = () => {
  return (
    <>
      <HeroTitle>
        <HeroImage />

        <HeroText>
          <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
            pasztor
          </Text>
          <Text tag="h1" variant="bigTitle" fontFamily="Syncopate">
            istvan
          </Text>
        </HeroText>
      </HeroTitle>
    </>
  );
};

export default HeroContent;
