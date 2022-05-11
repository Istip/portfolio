import styled from 'styled-components';

export const FooterWrapper = styled.div`
  flex: 1;
`;

export const FooterTitle = styled.div`
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin-bottom: 60px;
`;

export const LinkGroup = styled.div`
  max-width: 300px;
  margin-top: 20px;
`;

export const FooterLink = styled.a`
  all: unset;
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 5px 0;
  cursor: pointer;
`;
