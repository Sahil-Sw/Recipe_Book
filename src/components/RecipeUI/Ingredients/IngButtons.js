import Button from "../../Buttons/Button";
import RecipeBookContext from "../../../store/RecipeBookContext";
import { useContext, Fragment } from "react";

const IngButtons = (props) => {
  const context = useContext(RecipeBookContext);

  const doubleTap = (id) => {
    const ing = context.recipeIngredients.filter((ing) => {
      return ing.id === id;
    });
    if (ing[0].quantity > 0) {
      context.addRecipeItems(id);
    }
  };
  const singleTap = (id) => {
    const ing = context.recipeIngredients.filter((ing) => {
      return ing.id === id;
    });
    if (ing[0].quantity === 0) {
      context.addRecipeItems(id);
    }
  };

  return (
    <Fragment>
      <h1> Ingredients </h1>
      {context.recipeIngredients.map((button) => {
        return (
          <Button
            name={button.name}
            id={button.id}
            key={button.id}
            doubleTap={doubleTap}
            singleTap={singleTap}
          ></Button>
        );
      })}
    </Fragment>
  );
};

export default IngButtons;
