import { ParallaxProvider } from 'react-scroll-parallax';
import { Sections } from './App.styles';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Section, SectionHeader } from './components/Section';
import { tokens } from './components/UI';
import { Work } from './components/Work';

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />

      <Sections>
        <Section>
          <SectionHeader number="01 /" title="about me" />
          <About />
        </Section>

        <Section>
          <SectionHeader number="02 /" title="work" />
          <Work />
        </Section>

        <Section>
          <SectionHeader
            number="03 /"
            title="contact"
            numberColor={tokens.colors.mediumGrey}
            titleColor={tokens.colors.primary400}
          />
          <Contact />
        </Section>
      </Sections>
    </ParallaxProvider>
  );
}

export default App;
