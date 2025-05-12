const express = require ('express');
const app = express();
const axios = require('axios')
const cors = require('cors')
require('dotenv').config();


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '25540812-faf2b76d586c1787d2dd02736';
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors())


/**
 * Utility function to fetch data API
 * @param {string} category - The category to search, for example: sports, work, etc.
 * @param {number} page - The page number for pagination
 * @param {string} sortBy - Parameter to sort by (id or date)
 * @returns {Promise} - Promise with the API response
 */
const fetchPixabayData = async (category, page, sortBy) => {
  try {
    const imagesPerPage = 9;
    const url = `${BASE_URL}?key=${API_KEY}&q=${category}&${sortBy === 'date'?'order=latest':''}`
    const response = await axios.get(url);
    
    let results = response.data.hits;
    
    if (sortBy === 'id') {
      results = results.sort((a, b) => a.id - b.id);
    }
    
    // pagination
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    
    return {
      total: results.length,
      totalPages: Math.ceil(results.length / imagesPerPage),
      currentPage: page,
      data: results.slice(startIndex, endIndex)
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from the API');
  }
};


app.get('/api/images/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const page = parseInt(req.query.page) || 1;
    const sortBy = req.query.sortBy || 'id';
    
    if (page < 1) {
      return res.status(400).json({ error: 'Page number must be greater than 0' });
    }
    
    if (!['id', 'date'].includes(sortBy)) {
      return res.status(400).json({ error: 'Sort must be id or date!' });
    }
    
    const data = await fetchPixabayData(category, page, sortBy);
    res.json(data);
  } catch (error) {
    console.error(`Server error: ${error}`);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//health check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});