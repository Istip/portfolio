import { projects } from './projects';
import { WorkProfile } from './';
import { WorkWrapper as Wrapper } from './Work.styles';

const Work = () => {
  return (
    <Wrapper>
      {projects.map((project) => (
        <WorkProfile key={project.title} project={project} />
      ))}
    </Wrapper>
  );
};

export default Work;
