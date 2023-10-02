const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static('public'));

// Routes
app.use('/', require('./src/routes/index'));

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});