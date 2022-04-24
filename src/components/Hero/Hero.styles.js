import styled from 'styled-components';
import { tokens } from '../UI';

export const HeroWrapper = styled.div`
  height: calc(100vh - 100px);
  background: ${tokens.colors.primary400};
  text-align: right;
`;

export const HeroContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const HeroTop = styled.div`
  padding-right: 100px;
`;
