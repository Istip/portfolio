import { tokens } from '../UI';
import styled from 'styled-components';
import image from '../../assets/me.png';

const background = `url(${image})`;

export const HeroContentWrapper = styled.div`
  overflow: hidden;
  /* Demo for testing, probably should be removed - BLEND MODE */
  mix-blend-mode: multiply;

  min-height: 100%;

  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;

  background: ${background};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  padding: 32px 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const ScrollContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  padding: 40px;
`;

export const HeroText = styled.div`
  text-align: right;
  padding-left: 160px;
  height: auto;
  margin-top: -200px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 50px;
  background: ${tokens.colors.primary700};
  margin-bottom: 10px;
`;
