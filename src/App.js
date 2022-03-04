import classes from "./App.module.css";
import IngButtons from "./components/RecipeUI/Ingredients/IngButtons";
import SpiceButtons from "./components/RecipeUI/Spices/SpiceButtons";
import Ingredients from "./components/RecipeUI/Ingredients/Ingredients";
import Spices from "./components/RecipeUI/Spices/Spices";
import { useState, Fragment, useRef, useContext } from "react";
import FinalRecipe from "./components/FinalRecipe";
import RecipeBookContext from "./store/RecipeBookContext";

function App() {
  const [ingredientsAdded, setIngredientAdded] = useState(false);
  const [spicesAdded, setSpicesAdded] = useState(false);
  const recipeName = useRef();
  const context = useContext(RecipeBookContext);

  const getRecipeName = () => {
    console.log(recipeName.current.value);
    context.addRecipeName(recipeName.current.value);
  };

  return (
    <div className={classes.container}>
      {(!ingredientsAdded || !spicesAdded) && (
        <Fragment>
          <div className={classes.btnSection}>
            {!ingredientsAdded && !spicesAdded && <IngButtons></IngButtons>}
            {ingredientsAdded && !spicesAdded && <SpiceButtons></SpiceButtons>}
          </div>
          <div className={classes.recipeSection}>
            <h1>Recipe Book</h1>
            <input
              className={classes.recipeName}
              type="text"
              ref={recipeName}
              placeholder="Enter a Recipe Name"
              onBlur={getRecipeName}
            ></input>
            <div className={classes.itemsSection}>
              {!ingredientsAdded && !spicesAdded && (
                <Ingredients onConfirm={setIngredientAdded}></Ingredients>
              )}
              {ingredientsAdded && !spicesAdded && (
                <Spices onConfirm={setSpicesAdded}></Spices>
              )}
            </div>
          </div>
        </Fragment>
      )}
      {ingredientsAdded && spicesAdded && <FinalRecipe></FinalRecipe>}
    </div>
  );
}

export default App;
