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
  const [background, setBackground] = useState(tokens.colors.white);

  // const handleScroll = () => {
  //   console.log(window.pageYOffset);

  //   if (window.pageYOffset < 1400) {
  //     setBackground(tokens.colors.white);
  //   }

  //   if (window.pageYOffset > 1400) {
  //     setBackground(tokens.colors.primary400);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   document.body.style.background = background;

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [background]);

  return (
    <Container background={background}>
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
    </Container>
  );
}

export default App;
