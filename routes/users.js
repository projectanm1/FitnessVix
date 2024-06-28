/* 
1. first name: aviv , last name: levi, id: 319123287 .
2. first name: nir , last name: hemed, id: 207949090 .
3. first name: royi , last name: tvizer, id: 203926084 .
*/

const express = require('express');
const userData = require('../models/usersschema'); 

const router = express.Router();

// GET /users/:id - Retrieve user details by ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // Find a user in the database with the specified ID
        const user = await userData.findOne({ id: userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Send the generated report as JSON response
        res.json(user);
        console.log("User details fetched successfully")
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error);
    }
});

module.exports = router;