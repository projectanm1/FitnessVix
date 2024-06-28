/* 
1. first name: aviv , last name: levi, id: 319123287 .
2. first name: nir , last name: hemed, id: 207949090 .
3. first name: royi , last name: tvizer, id: 203926084 .
*/

const express = require('express');

const router = express.Router();

// GET /users/:id - Retrieve user details by ID
router.get('/', async (req, res) => {

    try {
        const developers = [
            {"firstname": "aviv", "lastname": "levi", "id": 319123287, "email": "avivlev98@gmail.com"},
            {"firstname": "nir", "lastname": "hemed", "id": 207949090, "email": "nirhe6895@gmail.com"},
            {"firstname": "royi", "lastname": "tvizer", "id": 203926084, "email": "royi.twizer@gmail.com"}
        ];
        res.json(developers); // Send the list of developers as a JSON response
        console.log("Developers about fetched successfully")
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message }); // Send a 500 Internal Server Error status with the error message
    }
});

module.exports = router;