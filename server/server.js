const express = require('express'); //this becuase the entire app use express
const items = require('../MockData/Data'); // Import the items data
const cors = require('cors');

// Middleware
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies


// @route   GET /api/items
// @desc    Get all items
// @access  Public
app.get('/api/items', (req, res) => {
  res.json(items);
});


// @route   GET /api/items/:id
// @desc    Get a single item by ID
// // @access  Public
// app.get('/api/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).json({ message: 'Item not found' });
//   res.json(item);
// });


// // @route   DELETE /api/items/:id
// // @desc    Delete an item by ID
// // @access  Public
// app.delete('/api/items/:id', (req, res) => {
//   const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
//   if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });

//   items.splice(itemIndex, 1);
//   res.json({ message: 'Item deleted' });
// });



// // @route   POST /api/items
// // @desc    Create a new item
// // @access  Public
// app.post('/api/items', (req, res) => {
//   const { first_name, last_name, email, phone } = req.body;
//   const newContact = { id: Date.now(), first_name, last_name, email, phone };
//   items.push(newContact);
//   res.status(201).json(newContact);
// });



// // @route   PUT /api/items/:id
// // @desc    Update an item by ID
// // @access  Public
// app.put('/api/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).json({ message: 'Item not found' });

//   item.first_name = req.body.first_name;
//   item.last_name = req.body.last_name;
//   item.email = req.body.email;
//   item.phone = req.body.phone;

//   res.json(item);
// });






// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
