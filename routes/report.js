/* 
1. first name: aviv , last name: levi, id: 319123287 .
2. first name: nir , last name: hemed, id: 207949090 .
3. first name: royi , last name: tvizer, id: 203926084 .
*/

const express = require('express');
const CalorieConsumption = require('../models/addcaloriesschema'); // Import the Mongoose model for calorie data

const router = express.Router();

// GET / - Generate a detailed report for a specific user, month, and year
router.get('/', async (req, res) => {
    // Fetch query parameters from the request URL
    const userId = req.query.user_id;
    const reportYear = req.query.year;
    const reportMonth = req.query.month;


    try {
        // Fetch all calorie consumption entries for the specified user, year, and month
        const calorieConsumptions = await CalorieConsumption.find({
            user_id: userId,
            year: reportYear,
            month: reportMonth
        });

        // Initialize an object to store calorie consumption by categories
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        };

        // Populate report object with calorie consumption data
        calorieConsumptions.forEach(item => {
            const { day, description, category, amount } = item;
            switch (category) {
                case 'breakfast':
                    report.breakfast.push({ day, description, amount });
                    break;
                case 'lunch':
                    report.lunch.push({ day, description, amount });
                    break;
                case 'dinner':
                    report.dinner.push({ day, description, amount });
                    break;
                default:
                    report.other.push({ day, description, amount });
                    break;
            }
        });

        // Send the generated report as JSON response
        res.json(report);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

});

module.exports = router;