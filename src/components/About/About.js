import { AboutWrapper as Wrapper } from './About.styles';
import { Sentence, Description } from './';
import { Text, tokens } from '../UI/';

const About = () => {
  const descriptions = [
    {
      title: 'AS DEVELOPER',
      content:
        'With a background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and collaborating on product teams and leading engineering efforts.',
    },
    {
      title: 'AS UI DESIGNER',
      content:
        'With my experience in UI and product engineering, I solve product problems and build appealing usable web experiences.',
    },
  ];

  return (
    <Wrapper>
      <Sentence>
        <Text variant="bold48" tag="span">
          Passionate about web technologies.
        </Text>
        <Text variant="bold48" tag="span" color={tokens.colors.mediumGrey}>
          I love working at the intersection of creativity and user friendly
          interfaces.
        </Text>
        <Text variant="bold48" tag="span">
          I create memorable web experiences.
        </Text>
      </Sentence>

      <Sentence marginBottom={120}>
        <Text variant="bold48" tag="span">
          When I'm not building or exploring new web experiences,
        </Text>
        <Text variant="bold48" tag="span" color={tokens.colors.mediumGrey}>
          I'm probably playing games or watching football.
        </Text>
      </Sentence>

      {descriptions.map((description) => (
        <Description key={description.title} title={description.title}>
          {description.content}
        </Description>
      ))}
    </Wrapper>
  );
};

export default About;
