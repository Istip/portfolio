import { useEffect, useRef, useState } from 'react';
import { Container, Sections, SubContainer } from './App.styles';
import {
  About,
  Contact,
  Hero,
  Navbar,
  Section,
  SectionHeader,
  Work,
} from './components';
import { tokens } from './components/UI';

function App() {
  const [background, setBackground] = useState(tokens.colors.primary400);
  const aboutRef = useRef();
  const contactRef = useRef();

  const handleScroll = () => {
    if (window.scrollY <= aboutRef.current.offsetTop) {
      setBackground(tokens.colors.primary400);
    } else if (
      window.scrollY > aboutRef.current.offsetTop &&
      window.scrollY <= contactRef.current.offsetTop - 300
    ) {
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
    <Container id="top">
      <Navbar background={background} />

      <SubContainer>
        <Hero />

        <Sections>
          <Section id="about" innerRef={aboutRef}>
            <SectionHeader
              number="01 /"
              title="about me"
              numberColor={tokens.colors.primary600}
            />
            <About background={background} />
          </Section>

          <Section id="work">
            <SectionHeader number="02 /" title="work" />
            <Work />
          </Section>

          <Section id="contact" innerRef={contactRef}>
            <SectionHeader
              number="03 /"
              title="contact"
              numberColor={tokens.colors.mediumGrey}
              titleColor={tokens.colors.primary400}
            />
            <Contact />
          </Section>
        </Sections>
      </SubContainer>
    </Container>
  );
}

export default App;
