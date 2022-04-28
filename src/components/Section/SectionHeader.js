import PropTypes from 'prop-types';
import { Center, Text, tokens } from '../UI';
import { SectionHeaderWrapper as Wrapper } from './SectionHeader.styles';

const SectionHeader = ({
  number,
  title,
  numberColor,
  titleColor,
  ...props
}) => {
  const textOptions = { tag: 'div', variant: 'title', fontFamily: 'Syncopate' };

  return (
    <Wrapper
      initial={{ opacity: 0, x: '-500px' }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <Center {...props} justify="space-between">
        <Text color={numberColor} {...textOptions}>
          {number}
        </Text>

        <Text color={titleColor} {...textOptions}>
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
