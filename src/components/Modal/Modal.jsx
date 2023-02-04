import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#root-modal');
const Modal = ({ close, image }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  const { largeUrl, tags } = image;

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <LazyLoadImage src={largeUrl} alt={tags} effect="opacity" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
