import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SERVER_PORT = 5000;
const API_BASE_URL = `http://localhost:${SERVER_PORT}/api`;

const initialState = {
  images: [],
  category: 'sports', 
  currentPage: 1,
  totalPages: 0,
  totalImages: 0,
  loading: false,
  error: null,
  sortBy: 'id',
  selectedImage: null,
};

/**
 * Async thunk for fetching images from our backend
 */
export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async ({ category, page, sortBy = 'id' }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/images/${category}?page=${page}&sortBy=${sortBy}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || 'Failed to fetch images'
      );
    }
  }
);



const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.totalImages = action.payload.total;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error fetching images';
      });
  },
});

export const {
  setCategory,
  setPage,
  setSortBy,
  setSelectedImage,
  clearSelectedImage,
} = imagesSlice.actions;

export default imagesSlice.reducer;