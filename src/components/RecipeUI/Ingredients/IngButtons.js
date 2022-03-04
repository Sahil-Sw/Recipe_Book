import Button from "../../Buttons/Button";
import RecipeBookContext from "../../../store/RecipeBookContext";
import { useContext, Fragment } from "react";

const IngButtons = (props) => {
  const context = useContext(RecipeBookContext);

  return (
    <Fragment>
      <h1> Ingredients </h1>
      {context.recipeIngredients.map((button) => {
        return (
          <Button name={button.name} id={button.id} key={button.id}></Button>
        );
      })}
    </Fragment>
  );
};

export default IngButtons;
