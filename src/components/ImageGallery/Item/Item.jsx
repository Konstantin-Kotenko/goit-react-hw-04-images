import PropTypes from 'prop-types';
import { GalleryItem, Images } from './Item.styled';

export const Item = ({ id, src, tag, onClick, largeImageURL }) => {
  return (
    <GalleryItem key={id} id={id}>
      <Images src={src} alt={tag} onClick={onClick} data-set={largeImageURL} />
    </GalleryItem>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string,
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
