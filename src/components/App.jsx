import { useState, useEffect, useCallback } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorMessage from '../shared/components/ErrorMessage/ErrorMessage';

import Button from '../shared/components/Button/Button';
import Loader from 'shared/components/Loader/Loader';
import Modal from 'components/Modal/Modal';

import { PER_PAGE, searchImages } from '../shared/API/images-api';

import styles from './app.modules.scss';
import '../styles/shared.scss';

export const App = () => {
  const [search, setSearch] = useState('initialState');
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentImage, setCurrentImage] = useState(null);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    setTotalImages(0);
    if (search) {
      searchImages(search, page)
        .then(({ totalHits, items }) => {
          setTotalImages(totalHits);
          setImages(prevImages => [...prevImages, ...items]);
          scroll.scrollMore(3600, {
            duration: 3000,
            delay: 0,
            smooth: 'linear',
          });
        })
        .catch(e => {
          setErrorMessage(e.message);
        })
        .finally(() => {
          setIsLoaded(false);
        });
    }
  }, [search, page]);

  const handleSubmit = useCallback(({ search }) => {
    setSearch(search);
    setImages([]);
    setErrorMessage('');
    setPage(1);
  }, []);

  const handleChangeForm = useCallback(() => {
    setErrorMessage('');
  }, []);

  const loadMore = useCallback(() => {
    setPage(page => {
      return page + 1;
    });
  }, []);

  const closeModal = useCallback(() => {
    setCurrentImage(null);
  }, []);

  const showImage = useCallback(image => {
    setCurrentImage(image);
  }, []);

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSubmit} onChange={handleChangeForm} />
      {errorMessage.length > 0 && <ErrorMessage message={errorMessage} />}
      <ImageGallery images={images} showImage={showImage} />
      {isLoaded && <Loader />}
      {page * PER_PAGE < totalImages && (
        <Button caption="Load more" onClick={loadMore} />
      )}
      {currentImage && <Modal close={closeModal} image={currentImage}></Modal>}
      <div id="modal-root"></div>
    </div>
  );
};
