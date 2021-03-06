import styled from 'styled-components';
import { tokens } from './tokens';

const Input = ({ ...props }) => {
  return <InputField {...props} />;
};

const InputField = styled.input`
  all: unset;
  padding: 20px;
  border: 1px solid ${tokens.colors.lightGrey};
  margin-bottom: 20px;
  color: ${tokens.colors.white};

  font-weight: 400;
  font-size: 18px;
  letter-spacing: -1px;

  transition: 250ms ease;

  &:focus {
    color: ${tokens.colors.primary400};
    border: 1px solid ${tokens.colors.primary400};
    font-weight: 700;
  }
`;

export default Input;
