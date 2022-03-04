import RecipeBookContext from "./RecipeBookContext";
import { useState } from "react";
const RecipeBookState = (props) => {
  const recipeState = {
    name: "Blank",
    recipeIngredients: [
      { id: 1, name: "Paneer", quantity: 0 },
      { id: 2, name: "Sausage", quantity: 0 },
      { id: 3, name: "Bread", quantity: 0 },
      { id: 4, name: "Spice", quantity: 0 },
      { id: 5, name: "Sugar", quantity: 0 },
    ],
    recipeSpices: [
      { id: 10, name: "Pepper", quantity: 0 },
      { id: 11, name: "Cardmom", quantity: 0 },
      { id: 12, name: "Cumin", quantity: 0 },
      { id: 13, name: "Nutmeg", quantity: 0 },
    ],
    addRecipeName(newName) {
      setState((prev) => {
        return { ...prev, name: newName };
      });
    },
    removeRecipeItems(id) {
      if (id < 6) {
        const current = this.recipeIngredients.filter(
          (ingredient) => ingredient.id === id
        );

        const newIngredients = this.recipeIngredients.map((ingredient) => {
          if (ingredient.id === current[0].id) {
            ingredient.quantity--;
          }
          return ingredient;
        });

        setState((prev) => {
          return { ...prev, recipeIngredients: newIngredients };
        });
      } else {
        const current = this.recipeSpices.filter((spice) => spice.id === id);

        const newSpices = this.recipeSpices.map((spice) => {
          if (spice.id === current[0].id) {
            spice.quantity--;
          }
          return spice;
        });

        setState((prev) => {
          return { ...prev, recipeSpices: newSpices };
        });
      }
    },

    addRecipeItems(id) {
      if (id < 6) {
        const current = this.recipeIngredients.filter(
          (ingredient) => ingredient.id === id
        );

        const newIngredients = this.recipeIngredients.map((ingredient) => {
          if (ingredient.id === current[0].id) {
            ingredient.quantity++;
          }
          return ingredient;
        });

        setState((prev) => {
          return { ...prev, recipeIngredients: newIngredients };
        });
      } else {
        const current = this.recipeSpices.filter((spice) => spice.id === id);

        const newSpice = this.recipeSpices.map((spice) => {
          if (spice.id === current[0].id) {
            spice.quantity++;
          }
          return spice;
        });

        setState((prev) => {
          return { ...prev, recipeSpices: newSpice };
        });
      }
    },
  };

  const [state, setState] = useState(recipeState);

  return (
    <RecipeBookContext.Provider value={state}>
      {props.children}
    </RecipeBookContext.Provider>
  );
};

export default RecipeBookState;
