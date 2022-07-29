import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrapper } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClose);
  }

  onClose = ({ code, target, currentTarget }) => {
    if (code === 'Escape' || target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onClose}>
        <ModalWrapper>{this.props.children}</ModalWrapper>
      </Overlay>,
      modalRoot
    );
  }
}
