import React from 'react';
import { SectionWrapper as Wrapper } from './Section.styles';

const Section = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Section;
