import React from 'react';
import PropTypes from 'prop-types';
import { tokens, fonts } from './';

const Text = ({
  variant,
  tag,
  children,
  color,
  lineHeight,
  fontFamily,
  ...props
}) => {
  const Tag = tag;
  return (
    <Tag
      style={{ ...fonts[variant], color, lineHeight, fontFamily }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;

Text.propTypes = {
  variant: PropTypes.string.isRequired,
  tag: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // By default the body has Inter font declared so it is not necessary
  // ...to define a default prop type for font family
  fontFamily: PropTypes.oneOf(['Inter', 'Syncopate']),
};

Text.defaultProps = {
  variant: 'body',
  tag: 'p',
  color: tokens.colors.primary700,
};
