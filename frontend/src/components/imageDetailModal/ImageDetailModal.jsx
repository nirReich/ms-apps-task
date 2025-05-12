import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedImage } from '../../store/slices/imagesSlice';
import styles from './ImageDetailModal.module.css';
import AppModal from '../modal/AppModal';
import { useState } from 'react';

/**
 * ImageDetailModal component displays detailed information about a selected image
 */
const ImageDetailModal = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.images.selectedImage);

  const [openModal,setOpenModal]=useState(true)
  
  const closeModal = () => {
    setOpenModal(false)
    dispatch(clearSelectedImage());
  };
  
  if (!selectedImage) {
    return null;
  }
  
  return (
    <AppModal open={openModal} onClose={closeModal} title="Image Details">
       <div className={styles.modalBody}>
          <div className={styles.imagePreview}>
            <img 
              src={selectedImage.webformatURL} 
              alt={selectedImage.tags} 
            />
          </div>
          
          <div className={styles.imageInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>ID:</span>
              <span className={styles.infoValue}>{selectedImage.id}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>User:</span>
              <span className={styles.infoValue}>{selectedImage.user}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Tags:</span>
              <span className={styles.infoValue}>{selectedImage.tags}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Views:</span>
              <span className={styles.infoValue}>{selectedImage.views.toLocaleString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Downloads:</span>
              <span className={styles.infoValue}>{selectedImage.downloads.toLocaleString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Likes:</span>
              <span className={styles.infoValue}>{selectedImage.likes.toLocaleString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Comments:</span>
              <span className={styles.infoValue}>{selectedImage.comments.toLocaleString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Type:</span>
              <span className={styles.infoValue}>{selectedImage.type}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Resolution:</span>
              <span className={styles.infoValue}>{selectedImage.imageWidth} X {selectedImage.imageHeight}</span>
            </div>
          </div>
        </div>
    </AppModal>
  );
};

export default ImageDetailModal;