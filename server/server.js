const express = require('express'); //this becuase the entire app use express
const { drivers, workAreas } = require('../MockData/Data'); // Import the drivers data

const cors = require('cors');

// Middleware
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies.


// @route   GET /api/drivers
// @desc    Get all drivers
// @access  Public
app.get('/api/drivers', (req, res) => {
  res.json(drivers);
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
