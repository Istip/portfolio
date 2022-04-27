import { useEffect, useState } from 'react';
import { Container, Sections } from './App.styles';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Section, SectionHeader } from './components/Section';
import { tokens } from './components/UI';
import { Work } from './components/Work';

function App() {
  const [background, setBackground] = useState(tokens.colors.primary400);

  const handleScroll = () => {
    if (window.scrollY <= 1400) {
      setBackground(tokens.colors.primary400);
    } else if (window.scrollY > 1400 && window.scrollY <= 2500) {
      setBackground(tokens.colors.white);
    } else {
      setBackground(tokens.colors.primary700);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.body.style.backgroundColor = background;

    return () => window.removeEventListener('scroll', handleScroll);
  }, [background]);

  return (
    <Container>
      <Navbar background={background} />
      <Hero />

      <Sections>
        <Section>
          <SectionHeader
            number="01 /"
            title="about me"
            numberColor={tokens.colors.primary600}
          />
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
    </Container>
  );
}

export default App;
