import PropTypes from 'prop-types';
import styles from './error-message.module.scss';

const ErrorMessage = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
