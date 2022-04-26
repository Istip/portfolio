import styled from 'styled-components';

export const WorkProfileWrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 150px;
  padding: 32px 0;

  -ms-overflow-style: none;
  scroll-snap-align: end;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
