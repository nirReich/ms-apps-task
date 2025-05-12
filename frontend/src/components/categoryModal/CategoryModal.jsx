import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CategoryModal.module.css";
import AppModal from "../modal/AppModal";

/**
 * A modal for selecting the image category
 * @param {Function} onSelectCategory - Callback for when a category is selected
 */
const CategoryModal = ({ onSelectCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentCategory = useSelector((state) => state.images.category);

  const categories = [
    "nature",
    "animals",
    "sports",
    "food",
    "work",
    "technology",
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
    closeModal();
  };

  return (
    <>
      <button className={styles.categoryButton} onClick={openModal}>
        Category: {currentCategory}
      </button>

      <AppModal open={isModalOpen} onClose={closeModal} title="Chose Category">
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <button
              key={category}
              className={
                currentCategory === category
                  ? styles.categoryItemActive
                  : styles.categoryItem
              }
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </AppModal>
    </>
  );
};

export default CategoryModal;
