import { Component } from 'react';
import Notiflix from 'notiflix';
import { Container } from './components/Container';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button';
import * as API from './api/api';
import { Modal } from './components/Modal';
import { Loader } from 'components/Loader';

export class App extends Component {
  state = {
    q: '',
    items: [],
    page: 1,
    isShowModal: false,
    loading: false,
    totalHits: null,
    lastPage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      this.setState({ loading: true });
      try {
        if (q === '') {
          return this.setState({
            items: [],
            q: '',
          });
        }
        const { hits, totalHits } = await API.getImages({ q, page });
        if (totalHits || hits.length) {
          if (page === 1) {
            Notiflix.Notify.success(` We found ${totalHits} images.`);
          }
          if (page >= 1) {
            this.setState({
              totalHits: totalHits,
              lastPage: Math.ceil(totalHits / 12),
            });
          }
        }
        if (hits.length < 12) {
          Notiflix.Notify.failure(`Sorry no more found images for "${q}"`);
        }
        this.setState({
          items: prevState.q !== q ? hits : [...prevState.items, ...hits],
        });
      } catch (error) {
        Notiflix.Notify.failure('Last page');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onFormSubmit = values => {
    const { q } = this.state;
    if (values === q && values !== '') {
      Notiflix.Notify.failure('Please entry new name');
      return this.setState({
        items: [],
        q: '',
        page: 1,
        totalHits: null,
      });
    }
    if (values === '') {
      this.setState({
        items: [],
        q: '',
        page: 1,
      });
      Notiflix.Notify.failure('Please entry name');
    }
    this.setState({
      q: values,
      page: 1,
    });
  };

  onToggleModal = e => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
    if (!this.state.isShowModal) {
      this.setState({
        largeImageURL: e.target.dataset.set,
        alt: e.target.alt,
      });
    }
  };

  onloadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { items, isShowModal, largeImageURL, alt, loading, page, lastPage } =
      this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onFormSubmit} />
        {loading && <Loader />}
        {items.length !== 0 && (
          <ImageGallery images={items} onClick={this.onToggleModal} />
        )}
        {isShowModal && (
          <Modal onClose={this.onToggleModal}>
            <img src={largeImageURL} alt={alt} />
          </Modal>
        )}
        {items.length >= 12 && page !== lastPage && (
          <Button onClick={this.onloadMore}>Load more</Button>
        )}
      </Container>
    );
  }
}
