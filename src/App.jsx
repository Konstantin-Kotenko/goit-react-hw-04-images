import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Container } from './components/Container';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';
import * as API from './api/api';
import { Modal } from './components/Modal';
import { Loader } from 'components/Loader';

export const App = () => {
  const [q, setQ] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowModal, setIsShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [alt, setAlt] = useState(null);

  useEffect(() => {
    const onFetch = async () => {
      if (q === '') {
        return;
      }
      if (q !== '' || page !== 1) {
        setLoading(true);
      }
      try {
        const { hits, totalHits } = await API.getImages({ q, page });

        if (page >= 1) {
          setTotal(totalHits);
          setLastPage(Math.ceil(total / 12));
          setItems(state => (page === 1 ? hits : [...state, ...hits]));
          if (page === 1) {
            Notiflix.Notify.success(` We found ${totalHits} images.`);
          }
        }

        if (hits.length < 12) {
          Notiflix.Notify.failure(`Sorry no more found images for "${q}"`);
        }
      } catch (error) {
        Notiflix.Notify.failure('Last page');
      } finally {
        setLoading(false);
      }
    };
    onFetch();
  }, [q, page, total]);

  const onFormSubmit = values => {
    if (values === q && values !== '') {
      Notiflix.Notify.failure('Please entry new name');
      setItems([]);
      setQ('');
      setPage(1);
      setTotal(null);
      return;
    }
    if (values === '') {
      setItems([]);
      setQ('');
      setPage(1);
      Notiflix.Notify.failure('Please entry name');
      return;
    }

    setQ(values);
    setPage(1);
  };

  const onToggleModal = e => {
    setIsShowModal(!isShowModal);
    if (isShowModal) {
      setLargeImageURL(e.target.dataset.set);
      setAlt(e.target.alt);
    }
  };

  const onloadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={onFormSubmit} />
      {loading && <Loader />}
      {items.length !== 0 && (
        <ImageGallery images={items} onClick={onToggleModal} />
      )}
      {isShowModal && (
        <Modal onClose={onToggleModal}>
          <img src={largeImageURL} alt={alt} />
        </Modal>
      )}
      {items.length >= 12 && page !== lastPage && (
        <Button onClick={onloadMore}>Load more</Button>
      )}
    </Container>
  );
};
