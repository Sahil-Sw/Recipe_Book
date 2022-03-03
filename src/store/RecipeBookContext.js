import { createContext } from "react";

const RecipeBookContext = createContext({
  name: "",
  recipeIngredients: [],
  recipeSpices: [],
  addRecipeName(newName) {},
  addRecipeItems(id) {},
  removeRecipeItems(id) {},
});

export default RecipeBookContext;
