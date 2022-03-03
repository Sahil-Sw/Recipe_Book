import classes from "./Button.module.css";

const Button = (props) => {
  const doubleClick = () => {
    props.doubleTap(props.id);
  };
  const singleClick = () => {
    props.singleTap(props.id);
  };
  return (
    <button
      onDoubleClick={doubleClick}
      onClick={singleClick}
      className={classes.btn}
      id={props.id}
    >
      {props.name}
    </button>
  );
};

export default Button;
