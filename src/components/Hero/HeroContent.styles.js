import styled from 'styled-components';
import image from '../../assets/me.png';
import { tokens } from '../UI';

const background = `url(${image})`;

export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 500px;
  background: ${background};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  position: absolute;
  top: 220px;
`;

export const HeroTitle = styled.div`
  position: relative;
  height: calc(100vh - 220px);

  /* Demo for testing, probably should be removed */
  mix-blend-mode: multiply;
`;

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 32px 0;
`;

export const HeroText = styled.div`
  position: absolute;
  top: -60px;
  text-align: right;
  padding-left: 160px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 50px;
  background: ${tokens.colors.primary700};
  margin-bottom: 10px;
`;
