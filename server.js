const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json()); // Parse JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Routes
app.use('/api/recipes', require('./routes/recipeRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
