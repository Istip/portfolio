import PropTypes from 'prop-types';
import { Center as IconWrapper } from '.';

// all the project icons are imported here
import Facebook from './icons/facebook.icon';
import Instagram from './icons/instagram.icon';
import Github from './icons/github.icon';

const Icon = (props) => {
  const icons = {
    facebook: <Facebook {...props} />,
    instagram: <Instagram {...props} />,
    github: <Github {...props} />,
  };

  return (
    <IconWrapper style={{ cursor: 'pointer' }} {...props}>
      {icons[props.icon]}
    </IconWrapper>
  );
};

export default Icon;

Icon.propTypes = {
  icon: PropTypes.oneOf(['facebook', 'instagram', 'github']).isRequired,
};
