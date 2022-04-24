import { ParallaxProvider } from 'react-scroll-parallax';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
    </ParallaxProvider>
  );
}

export default App;
