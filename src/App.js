import { ParallaxProvider } from 'react-scroll-parallax';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
      <div>
        <div style={{ fontSize: '300px' }}>Hello</div>
        <div style={{ fontSize: '300px' }}>Hello</div>
        <div style={{ fontSize: '300px' }}>Hello</div>
        <div style={{ fontSize: '300px' }}>Hello</div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
