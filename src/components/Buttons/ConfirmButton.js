import classes from "./ConfirmButton.module.css";

const ConfirmButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default ConfirmButton;
