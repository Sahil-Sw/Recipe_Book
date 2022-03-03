import Button from "../../Buttons/Button";
import RecipeBookContext from "../../../store/RecipeBookContext";
import { useContext, Fragment } from "react";

const IngButtons = (props) => {
  const ingButtons = useContext(RecipeBookContext).recipeIngredients;

  return (
    <Fragment>
      <h1> Ingredients </h1>
      {ingButtons.map((button) => {
        return (
          <Button name={button.name} id={button.id} key={button.id}></Button>
        );
      })}
    </Fragment>
  );
};

export default IngButtons;
