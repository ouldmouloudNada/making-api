const express = require('express');
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController');

// GET all recipes
router.get('/', getAllRecipes);

// GET a single recipe by ID
router.get('/:id', getRecipeById);

// POST a new recipe
router.post('/', createRecipe);

// PATCH (update) a recipe by ID
router.patch('/:id', updateRecipe);

// DELETE a recipe by ID
router.delete('/:id', deleteRecipe);

module.exports = router;
