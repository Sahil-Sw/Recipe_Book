import Button from "../../Buttons/Button";
import RecipeBookContext from "../../../store/RecipeBookContext";
import { useContext, Fragment } from "react";

const SpiceButtons = (props) => {
  const context = useContext(RecipeBookContext);

  const doubleTap = (id) => {
    const spices = context.recipeSpices.filter((spice) => {
      return spice.id === id;
    });
    if (spices[0].quantity > 0) {
      context.addRecipeItems(id);
    }
  };
  const singleTap = (id) => {
    const spices = context.recipeSpices.filter((spice) => {
      return spice.id === id;
    });
    if (spices[0].quantity === 0) {
      context.addRecipeItems(id);
    }
  };

  return (
    <Fragment>
      <h1> Spices </h1>
      {context.recipeSpices.map((button) => {
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

export default SpiceButtons;
