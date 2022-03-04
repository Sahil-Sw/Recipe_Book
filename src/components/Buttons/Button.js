import classes from "./Button.module.css";
import RecipeBookContext from "../../store/RecipeBookContext";
import { useContext } from "react";

const Button = (props) => {
  const context = useContext(RecipeBookContext);

  const doubleTap = () => {
    let item;
    if (props.id < 6) {
      item = context.recipeIngredients.filter((it) => {
        return it.id === props.id;
      });
    } else {
      item = context.recipeSpices.filter((it) => {
        return it.id === props.id;
      });
    }

    if (item[0].quantity > 0) {
      context.addRecipeItems(props.id);
    }
  };

  const singleTap = () => {
    let item;
    if (props.id < 6) {
      item = context.recipeIngredients.filter((it) => {
        return it.id === props.id;
      });
    } else {
      item = context.recipeSpices.filter((it) => {
        return it.id === props.id;
      });
    }

    if (item[0].quantity === 0) {
      context.addRecipeItems(props.id);
    }
  };

  return (
    <button
      onDoubleClick={doubleTap}
      onClick={singleTap}
      className={classes.btn}
    >
      {props.name}
    </button>
  );
};

export default Button;
