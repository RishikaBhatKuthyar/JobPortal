
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const companies = require('./companies');

//  let requests from any origin access this data
app.use(cors({
    origin: 'http://localhost:3000', // Adjust according to your frontend's URL
    credentials: true, // This is important for sending cookies
}));
app.use(express.json());

// Environment variables
const port = process.env.PORT || 4002;
const mongoDBUri = process.env.MONGODB_URI || "mongodb://localhost:27017/Assignment_10";

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes
const usersRoute = require('./routes/user');
app.use('/', usersRoute);

// Connect to MongoDB
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch(err => console.error("Connection error", err));

// Basic route for home page
app.get('/', (req, res) => {
    res.send('Hello from Homepage');
});


app.get('/api/companies', (req, res) => {
    res.json(companies);
});

// Start listening for requests
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
