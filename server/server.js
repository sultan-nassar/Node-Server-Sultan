const express = require('express'); //this becuase the entire app use express
const { items, workAreas } = require('../MockData/Data');
 // Import the items data
const cors = require('cors');

// Middleware
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies.


// @route   GET /api/items
// @desc    Get all items
// @access  Public
app.get('/api/items', (req, res) => {
  res.json(items);
});

// @route   GET /api/workareas
// @desc    Get all work areas
// @access  Public
app.get('/api/workareas', (req, res) => {
  res.json(workAreas); // Send workAreas data as JSON
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
