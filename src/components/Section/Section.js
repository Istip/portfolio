import { SectionWrapper as Wrapper } from './Section.styles';

const Section = ({ innerRef, ...props }) => {
  return (
    <Wrapper ref={innerRef} {...props}>
      {props.children}
    </Wrapper>
  );
};

export default Section;
