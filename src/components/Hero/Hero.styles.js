import styled from 'styled-components';
import { tokens } from '../UI';

export const HeroWrapper = styled.div`
  position: relative;
  top: 100px;
  height: calc(100vh - 100px);
  background: ${tokens.colors.primary400};
`;

export const HeroMain = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
