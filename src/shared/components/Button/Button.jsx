import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ caption, onClick }) => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={onClick}>
        {caption}
      </button>
    </div>
  );
};

export default Button;

Button.defaultProps = {
  caption: '',
  onClick: {},
};

Button.propTypes = {
  caption: PropTypes.string,
  onClick: PropTypes.func,
};
