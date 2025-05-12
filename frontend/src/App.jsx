import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setPage, setCategory } from './store/slices/imagesSlice';
import ImageGrid from './components/imageGrid/ImageGrid';
import CategoryModal from './components/categoryModal/CategoryModal';
import ImageDetailModal from './components/imageDetailModal/ImageDetailModal';
import { Button } from '@mui/material';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { 
    images, 
    category, 
    currentPage, 
    totalPages, 
    loading, 
    error,
    selectedImage
  } = useSelector((state) => state.images);
  
  // Fetch images on component mount or category changes
  useEffect(() => {
    dispatch(fetchImages({ category, page: currentPage }));
  }, [dispatch, category, currentPage]);
  
  // page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };
  
  // category change
  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
  };
  
  return (
    <div className="app-container">
      <header className="app-header">
        <Button 
          variant='contained'
          onClick={handlePrevPage}
          disabled={currentPage === 1 || loading}
        >
          Prev
        </Button>
        
        <CategoryModal onSelectCategory={handleCategoryChange} />
        
        <Button 
          variant='contained' 
          onClick={handleNextPage}
          disabled={currentPage === totalPages || loading}
        >
          Next
        </Button>
      </header>
      
      <main>
        {loading ? (
          <div className="loading">Loading images...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : (
          <ImageGrid images={images} />
        )}
      </main>
      
      {selectedImage && <ImageDetailModal />}
      
      <footer className="app-footer">
        <div className="pagination-info">
          Page {currentPage} of {totalPages}
        </div>
      </footer>
    </div>
  );
}

export default App;