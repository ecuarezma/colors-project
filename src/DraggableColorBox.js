import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "start",
    fontSize: "12px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <div className={classes.boxContent}>
        <span> {props.name}</span>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
