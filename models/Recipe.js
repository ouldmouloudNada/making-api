const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  price: { type: Number, required: true },
  createdBy: { type: String, required: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
