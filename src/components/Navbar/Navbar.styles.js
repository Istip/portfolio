import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavbarWrapper = styled(motion.div)`
  transition: background-color 400ms ease;
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 1;
  background-color: ${({ background }) => background};
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
