import styled from 'styled-components';
import image from '../../assets/me.png';

const background = `url(${image})`;

export const HeroImage = styled.div`
  width: 1000px;
  height: 600px;
  background: ${background};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  position: absolute;
  top: 140px;
`;

export const HeroTitle = styled.div`
  position: relative;
`;

export const HeroText = styled.div`
  position: absolute;
  text-align: right;
  padding-left: 160px;
`;
