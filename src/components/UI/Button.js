import styled from 'styled-components';
import PropTypes from 'prop-types';
import { tokens } from './tokens';
import { Text } from './';

const Button = ({ variant, block, margin, ...props }) => {
  return (
    <ButtonBody className={variant} block={block} margin={margin} {...props}>
      <Text variant="button">{props.children}</Text>
    </ButtonBody>
  );
};

const ButtonBody = styled.button`
  all: unset;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  cursor: pointer;
  transition: 200ms ease;
  user-select: none;
  margin: ${({ margin }) => margin};

  &.primary {
    border: 1px solid ${tokens.colors.primary500};
    background: ${tokens.colors.primary500};
    padding: 10px 40px;

    &:hover {
      border: 1px solid ${tokens.colors.primary600};
      background: ${tokens.colors.primary600};
    }

    &:active {
      border: 1px solid ${tokens.colors.primary700};
    }
  }

  &.secondary {
    border: 1px solid ${tokens.colors.primary700};
    background: ${tokens.colors.white};
    padding: 10px 40px;

    &:hover {
      background: ${tokens.colors.primary200};
    }

    &:active {
      background: ${tokens.colors.primary300};
    }
  }
`;

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  block: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Button.defaultProps = {
  variant: 'primary',
  block: false,
  margin: 0,
};
