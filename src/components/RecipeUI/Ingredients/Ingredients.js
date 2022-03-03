import RecipeBookContext from "../../../store/RecipeBookContext";
import DisplayRecipeItems from "../Display/DisplayRecipeItems";
import { useContext, Fragment } from "react";
import classes from "./Ingredients.module.css";
import ConfirmButton from "../../Buttons/ConfirmButton";
const Ingredients = (props) => {
  const ingredients = useContext(RecipeBookContext).recipeIngredients.filter(
    (ingredient) => {
      return ingredient.quantity > 0;
    }
  );

  const onConfirmHandler = () => {
    props.onConfirm(true);
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <h2> Ingredients </h2>
        <h2> Quantity </h2>
      </div>
      {ingredients.map((ingredient) => {
        return (
          <DisplayRecipeItems
            name={ingredient.name}
            key={ingredient.id}
            id={ingredient.id}
            quantity={ingredient.quantity}
          ></DisplayRecipeItems>
        );
      })}
      <ConfirmButton
        text="Go to add Spices"
        onClick={onConfirmHandler}
      ></ConfirmButton>
    </Fragment>
  );
};

export default Ingredients;
