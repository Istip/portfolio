import { AboutWrapper as Wrapper } from './About.styles';
import { Sentence } from './';
import { Text, tokens } from '../UI/';

const About = () => {
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
    </Wrapper>
  );
};

export default About;
