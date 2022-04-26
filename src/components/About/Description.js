import PropTypes from 'prop-types';
import {
  DescriptionWrapper as Wrapper,
  Title,
  Content,
} from './Description.styles';
import { Text } from '../UI/';

const Description = ({ title, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>
        <Text tag="div" variant="bold24">
          {title}
        </Text>
      </Title>

      <Content>
        <Text tag="div" variant="regular24">
          {props.children}
        </Text>
      </Content>
    </Wrapper>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Description;
