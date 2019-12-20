import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerStyles";

export class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curColor: "teal",
      newColorName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateCurColor = this.updateCurColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.curColor)
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  updateCurColor(newColor) {
    this.setState({ curColor: newColor.hex });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.curColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }
  render() {
    const { curColor, newColorName } = this.state;
    const { paletteIsFull, classes } = this.props;
    return (
      <div>
        <ChromePicker
          className={classes.picker}
          color={curColor}
          onChangeComplete={this.updateCurColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.colorNameInput}
            name="newColorName"
            value={newColorName}
            placeholder="Color Name"
            variant="filled"
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already exists!"
            ]}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            color="primary"
            style={{
              backgroundColor: paletteIsFull ? "gray" : curColor
            }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPicker);
