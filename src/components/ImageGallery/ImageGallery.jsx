import { memo } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './imageGallery.module.scss';

const ImageGallery = ({ images, showImage }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(image => {
        const { id, url, largeUrl } = image;
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            url={url}
            largeUrl={largeUrl}
            onClick={showImage}
            image={image}
          />
        );
      })}
    </ul>
  );
};

export default memo(ImageGallery);

ImageGallery.defaultProps = {
  showImage: {},
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      largeUrl: PropTypes.string.isRequired,
      tag: PropTypes.string,
    })
  ),
  showImage: PropTypes.func,
};
