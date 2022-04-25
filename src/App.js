import { ParallaxProvider } from 'react-scroll-parallax';
import { Sections } from './App.styles';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Section, SectionHeader } from './components/Section';

function App() {
  return (
    <>
      <ParallaxProvider>
        <Navbar />
        <Hero />

        <Sections>
          <Section>
            <SectionHeader number="01 /" title="about me" />
            <About />
          </Section>
        </Sections>
      </ParallaxProvider>
    </>
  );
}

export default App;
