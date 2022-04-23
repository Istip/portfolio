import styled from 'styled-components';
import { tokens } from '../UI';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${tokens.colors.primary400};
`;

export const NavbarContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarAnchor = styled.a`
  all: unset;
  cursor: pointer;
  margin-right: 10px;
`;
