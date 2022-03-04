import Button from "../../Buttons/Button";
import RecipeBookContext from "../../../store/RecipeBookContext";
import { useContext, Fragment } from "react";

const SpiceButtons = (props) => {
  const context = useContext(RecipeBookContext);

  return (
    <Fragment>
      <h1> Spices </h1>
      {context.recipeSpices.map((button) => {
        return (
          <Button name={button.name} id={button.id} key={button.id}></Button>
        );
      })}
    </Fragment>
  );
};

export default SpiceButtons;
