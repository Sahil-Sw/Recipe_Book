import classes from "./DisplayRecipeItems.module.css";
import { useContext } from "react";
import RecipeBookContext from "../../../store/RecipeBookContext";

const DisplayRecipeItems = (props) => {
  const context = useContext(RecipeBookContext);

  const addRecipe = () => {
    context.addRecipeItems(props.id);
  };
  const removeRecipe = () => {
    context.removeRecipeItems(props.id);
  };

  return (
    <div className={classes.recipeItem}>
      <h4>{props.name}</h4>
      <div>
        <button className={classes.action} onClick={removeRecipe}>
          -
        </button>
        <span>{props.quantity}</span>
        <button className={classes.action} onClick={addRecipe}>
          +
        </button>
      </div>
    </div>
  );
};

export default DisplayRecipeItems;
