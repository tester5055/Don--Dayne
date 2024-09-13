const express = require('express');
const path = require('path'); // Require the path module
const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the frontend/public directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Catch-all route for serving the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/landing/landing.html'));
});
const keepAlive = require('./keepAlive');
keepAlive(); // Start pinging the server
module.exports = app; // Export the app
