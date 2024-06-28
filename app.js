/* 
1. first name: aviv , last name: levi, id: 319123287 .
2. first name: nir , last name: hemed, id: 207949090 .
3. first name: royi , last name: tvizer, id: 203926084 .
*/

// Define required packages and routes

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const addCaloriesRouter = require('./routes/addcalories');
const getUserRouter = require('./routes/users');
const getReportRouter = require('./routes/report');
const getAboutRouter = require('./routes/about');

/* 
initialize the web server using express.
fetch sensetive mongo data from environment variables
*/

const app = express();

app.use(express.json());


// URL-encoded password in the connection string

const dbUser = process.env.MONGO_USER;
const dbPassword = encodeURIComponent(process.env.MONGO_PASSWORD); // Use encodeURIComponent to encode the password
const dbName = process.env.MONGO_DB_NAME;

const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.syvro0y.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB Atlas using promise

mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    });

// Define routes for adding calories, getting user details, generating reports, and about information

app.use('/addcalories', addCaloriesRouter);
app.use('/users', getUserRouter);
app.use('/report', getReportRouter);
app.use('/about', getAboutRouter);

// Start the server on the specified port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
