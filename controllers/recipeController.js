const Recipe = require('../models/Recipe');

// GET all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new recipe
exports.createRecipe = async (req, res) => {
  const { name, ingredients, price, createdBy } = req.body;
  const newRecipe = new Recipe({ name, ingredients, price, createdBy });

  try {
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PATCH (update) a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

