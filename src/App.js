import styled from 'styled-components';

// Fonts used
import './fonts/Uncut-Sans-Regular.otf';
import './fonts/Uncut-Sans-Medium.otf';
import './fonts/Uncut-Sans-Semibold.otf';
import './fonts/Uncut-Sans-Bold.otf';

function App() {
  return (
    <div>
      <Title>Portfolio</Title>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla,
        doloribus eos in voluptate ipsam non, deserunt exercitationem explicabo
        culpa, molestias atque provident et accusamus. Vel assumenda cupiditate
        inventore eos!
      </Description>
    </div>
  );
}

const Title = styled.h1`
  font-family: 'Bold';
  font-size: 72px;
`;

const Description = styled.div`
  font-family: 'Regular';
  font-size: 20px;
`;

export default App;
