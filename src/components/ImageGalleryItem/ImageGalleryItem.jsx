import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './imageGalleryItem.module.scss';

const ImageGalleryItem = ({ onClick, image }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.url}
        alt={image.tags}
        className={styles.ImageGalleryItemImage}
        onClick={() => {
          onClick(image);
        }}
      />
    </li>
  );
};

export default memo(ImageGalleryItem);

ImageGalleryItem.defaultProps = {
  onClick: {},
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    largeUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};
