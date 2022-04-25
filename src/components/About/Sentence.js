import { SentenceWrapper } from './Sentence.styles';

const Sentence = (props) => {
  return <SentenceWrapper>{props.children}</SentenceWrapper>;
};

export default Sentence;
