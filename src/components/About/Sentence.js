import PropTypes from 'prop-types';
import { SentenceWrapper as Wrapper } from './Sentence.styles';

const Sentence = ({ marginBottom, ...props }) => {
  return (
    <Wrapper marginBottom={marginBottom} {...props}>
      {props.children}
    </Wrapper>
  );
};

Sentence.propTypes = {
  marginBottom: PropTypes.number,
};

Sentence.defaultProps = {
  marginBottom: 60,
};

export default Sentence;
