const { Router } = require("express");
const { getRecipes, idReceta, recibeRecipe } = require("../Controllers/recipeControllers");

const recipeRoute = Router();

recipeRoute.get("/recipes", getRecipes);
recipeRoute.get("/recipes/:id", idReceta);
recipeRoute.post("/recipe", recibeRecipe);


module.exports = recipeRoute;