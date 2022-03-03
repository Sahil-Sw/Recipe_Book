import RecipeBookContext from "./RecipeBookContext";

const RecipeBookState = (props) => {
  const recipeState = {
    name: "",
    recipeIngredients: [
      { id: 1, name: "Paneer", quantity: 1 },
      { id: 2, name: "Sausage", quantity: 1 },
      { id: 3, name: "Bread", quantity: 1 },
      { id: 4, name: "Spice", quantity: 1 },
      { id: 5, name: "Sugar", quantity: 1 },
    ],
    recipeSpices: [
      { id: 6, name: "Pepper", quantity: 1 },
      { id: 7, name: "Cardmom", quantity: 2 },
      { id: 8, name: "Cumin", quantity: 3 },
      { id: 9, name: "Nutmeg", quantity: 4 },
    ],
    addRecipeName(newName) {},
    addRecipeItems(id) {},
    removeRecipeItems(id) {},
  };

  return (
    <RecipeBookContext.Provider value={recipeState}>
      {props.children}
    </RecipeBookContext.Provider>
  );
};

export default RecipeBookState;
