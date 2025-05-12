import { useDispatch } from 'react-redux';
import { setSelectedImage } from '../../store/slices/imagesSlice';
import styles from './ImageGrid.module.css'

/**
 * ImageGrid component displays a grid of images
 * @param {Object[]} images - Array of image objects from Pixabay API
 */
const ImageGrid = ({ images }) => {
  const dispatch = useDispatch();

  const handleImageClick = (image) => {
    dispatch(setSelectedImage(image));
  };

  return (
    <div className={styles.imageGrid}>
      {images.length === 0 ? (
        <div className={styles.noImages}>No images found</div>
      ) : (
        images.map((image) => (
          <div 
            key={image.id} 
            className={styles.imageItem}
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.webformatURL} 
              alt={image.tags} 
              loading="lazy"
            />
            <div className={styles.imageOverlay}>
              <div className={styles.imageTags}>By: {image.user}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGrid;