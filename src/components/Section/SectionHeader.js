import PropTypes from 'prop-types';
import React from 'react';
import { Center, Text, tokens } from '../UI';
import { SectionHeaderWrapper as Wrapper } from './SectionHeader.styles';

const SectionHeader = ({
  number,
  title,
  numberColor,
  titleColor,
  ...props
}) => {
  return (
    <Wrapper
      initial={{ opacity: 0, x: '-500px' }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <Center {...props} justify="space-between">
        <Text tag="div" variant="black48" color={numberColor}>
          {number}
        </Text>

        <Text
          tag="div"
          variant="title"
          fontFamily="Syncopate"
          color={titleColor}
        >
          {title}
        </Text>
      </Center>
    </Wrapper>
  );
};

SectionHeader.propTypes = {
  // The convention will be: / + number
  // ...example: / 01 or / 02 etc.
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  numberColor: PropTypes.string,
  titleColor: PropTypes.string,
};

SectionHeader.defaultProps = {
  numberColor: tokens.colors.lightGrey,
  titleColor: tokens.colors.primary700,
};

export default SectionHeader;
