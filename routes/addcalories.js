/* 
1. first name: aviv , last name: levi, id: 319123287 .
2. first name: nir , last name: hemed, id: 207949090 .
3. first name: royi , last name: tvizer, id: 203926084 .
*/

const express = require('express');
const { v4: uuidv4 } = require('uuid'); 
const addCaloriesData = require('../models/addcaloriesschema'); // Import the Mongoose model for calorie data

const router = express.Router(); // Create a new Express router

// POST / - Add new calorie data
router.post('/', async (req, res) => {
  
  // Fetch required fields from the request body
  const { user_id, year, month, day, description, category, amount } = req.body;
  
  // Generate a unique ID using uuidv4
  const id = uuidv4();
  
  // Create a new instance of addCaloriesData with the provided data
  const newCaloriesData = new addCaloriesData({
    user_id,
    year,
    month,
    day,
    id,
    description,
    category,
    amount
  });

  try {
    // Save the new calorie data to the database
    const savedCaloriesData = await newCaloriesData.save();
    res.status(201).json(savedCaloriesData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }

});

module.exports = router; // Export the router for use in other parts of the application
