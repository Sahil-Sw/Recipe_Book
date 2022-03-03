import classes from "./DisplayRecipeItems.module.css";

const DisplayRecipeItems = (props) => {
  return (
    <div className={classes.recipeItem}>
      <h4>{props.name}</h4>
      <div>
        <button
          className={classes.action}
          onClick={props.removeItem}
          id={props.id}
        >
          -
        </button>
        <span>{props.quantity}</span>
        <button
          className={classes.action}
          onClick={props.addItem}
          id={props.id}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DisplayRecipeItems;
