const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const imagesController = require('./controllers/imagesController');

const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());


app.get('/api/images/:category', imagesController.getImages);

//health check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});