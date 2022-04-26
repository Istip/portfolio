import styled from 'styled-components';

export const WorkWrapper = styled.div`
  max-width: 1440px;
  overflow-x: scroll;
  display: flex;

  scroll-snap-type: y mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
