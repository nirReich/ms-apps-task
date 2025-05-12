import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CategoryModal.module.css";
import AppModal from "../modal/AppModal";
import { Button } from "@mui/material";

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
      <Button variant='contained' onClick={openModal}>
        Category: {currentCategory}
      </Button>

      <AppModal open={isModalOpen} onClose={closeModal} title="Chose Category">
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Button
            variant={currentCategory === category? "contained":"outlined"}
              key={category}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </AppModal>
    </>
  );
};

export default CategoryModal;
