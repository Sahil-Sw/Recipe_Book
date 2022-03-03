import classes from "./App.module.css";
import IngButtons from "./components/RecipeUI/Ingredients/IngButtons";
import SpiceButtons from "./components/RecipeUI/Spices/SpiceButtons";
import Ingredients from "./components/RecipeUI/Ingredients/Ingredients";
import Spices from "./components/RecipeUI/Spices/Spices";
import { useState, Fragment } from "react";

function App() {
  const [onIngredientPage, setOnIngredientPage] = useState(false);
  const [onSpicePage, setOnSpicePage] = useState(false);

  return (
    <div className={classes.container}>
      {(!onIngredientPage || !onSpicePage) && (
        <Fragment>
          <div class={classes.btnSection}>
            {!onIngredientPage && !onSpicePage && <IngButtons></IngButtons>}
            {onIngredientPage && !onSpicePage && <SpiceButtons></SpiceButtons>}
          </div>
          <div class={classes.recipeSection}>
            <h1>Recipe Book</h1>
            <input
              className={classes.recipeName}
              type="text"
              placeholder="Enter a Recipe Name"
            ></input>
            <div className={classes.itemsSection}>
              {!onIngredientPage && !onSpicePage && (
                <Ingredients onConfirm={setOnIngredientPage}></Ingredients>
              )}
              {onIngredientPage && !onSpicePage && (
                <Spices onConfirm={setOnSpicePage}></Spices>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
