import RecipeBookContext from "../../../store/RecipeBookContext";
import DisplayRecipeItems from "../Display/DisplayRecipeItems";
import { useContext, Fragment } from "react";
import classes from "./Spices.module.css";
import ConfirmButton from "../../Buttons/ConfirmButton";
const Spices = (props) => {
  const spices = useContext(RecipeBookContext).recipeSpices.filter((spice) => {
    return spice.quantity > 0;
  });

  const onConfirmHandler = () => {
    props.onConfirm(true);
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <h2> Spices </h2>
        <h2> Quantity </h2>
      </div>
      {spices.map((spice) => {
        return (
          <DisplayRecipeItems
            name={spice.name}
            key={spice.id}
            id={spice.id}
            quantity={spice.quantity}
          ></DisplayRecipeItems>
        );
      })}
      <ConfirmButton
        text="Generate Recipe"
        onClick={onConfirmHandler}
      ></ConfirmButton>
    </Fragment>
  );
};

export default Spices;
