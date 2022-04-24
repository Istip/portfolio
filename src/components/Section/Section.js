import React from 'react';
import { SectionWrapper } from './Section.styles';

const Section = (props) => {
  return <SectionWrapper>{props.children}</SectionWrapper>;
};

export default Section;
