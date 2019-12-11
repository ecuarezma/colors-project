import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.shadeGenerator(
      this.props.palette.colors,
      this.props.colorId
    );
    this.shadeGenerator = this.shadeGenerator.bind(this);
  }

  shadeGenerator(palette, id) {
    let shades = [];
    for (const color in palette) {
      shades = shades.concat(palette[color].find(color => color.id === id));
    }
    console.log(shades);
    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>SingleColorPalette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
