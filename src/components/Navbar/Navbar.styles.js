import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100px;
  transition: 1s ease;
  background: ${({ background }) => background};
  position: fixed;
  z-index: 1;
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
