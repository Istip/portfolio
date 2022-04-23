import styled from 'styled-components';
import PropTypes from 'prop-types';

const Center = (props) => {
  return <Centered {...props}>{props.children}</Centered>;
};

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ between }) => between};
  gap: ${({ gap }) => `${gap}px`};
  flex-direction: ${({ direction }) => direction};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
`;

export default Center;

Center.propTypes = {
  between: PropTypes.oneOf([
    'space-between',
    'space-around',
    'space-evenly',
    'center',
  ]),
  gap: PropTypes.number,
  direction: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Center.defaultProps = {
  between: 'center',
  gap: 0,
  direction: 'row',
  height: 'auto',
  margin: 0,
};
