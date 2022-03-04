import ConfirmButton from "./Buttons/ConfirmButton";
import RecipeBookContext from "../store/RecipeBookContext";
import { useContext } from "react";
import classes from "./FinalRecipe.module.css";

const FinalRecipe = (props) => {
  const context = useContext(RecipeBookContext);

  return (
    <div className={classes.mainContainer}>
      <h1>{context.name}</h1>

      <h2> Ingredients Used</h2>

      <div className={classes.itemsContainer}>
        <div className={classes.tableHeading}>
          <h3>Ingredients</h3>
          <h3>Quantity</h3>
        </div>
        <div>
          {context.recipeIngredients
            .filter((ingredient) => {
              return ingredient.quantity > 0;
            })
            .map((ingredient) => {
              return (
                <div className={classes.tableContent}>
                  <span>{ingredient.name}</span>
                  <span>{ingredient.quantity}</span>
                </div>
              );
            })}
        </div>
      </div>

      <h2> Spices Used</h2>

      <div className={classes.itemsContainer}>
        <div className={classes.tableHeading}>
          <h3>Spices</h3>
          <h3>Quantity</h3>
        </div>
        <div>
          {context.recipeSpices
            .filter((spice) => {
              return spice.quantity > 0;
            })
            .map((spice) => {
              return (
                <div className={classes.tableContent}>
                  <span>{spice.name}</span>
                  <span>{spice.quantity}</span>
                </div>
              );
            })}
        </div>
      </div>
      <ConfirmButton
        onClick={() => {
          window.location.reload();
        }}
        text="Start again"
      >
        Start again
      </ConfirmButton>
    </div>
  );
};

export default FinalRecipe;
