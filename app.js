const express = require('express');
const routes = require('./src/routes/index');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Dummy Node Express App!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
