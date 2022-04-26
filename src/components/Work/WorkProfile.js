import PropTypes from 'prop-types';
import { Text, tokens } from '../UI/';
import {
  ContentWrapper,
  Image,
  ImageWrapper,
  WorkProfileWrapper as Wrapper,
} from './WorkProfile.styles';

const WorkProfile = ({ project, ...props }) => {
  return (
    <Wrapper {...props}>
      <ContentWrapper>
        <Text tag="h2" variant="bold48" color={tokens.colors.primary500}>
          {project.title}
        </Text>
        <br />
        <Text variant="regular20" lineHeight="160%">
          {project.description}
        </Text>
      </ContentWrapper>

      <ImageWrapper>
        <Image src={project.image} />
      </ImageWrapper>
    </Wrapper>
  );
};

WorkProfile.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkProfile;
