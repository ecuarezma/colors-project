import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map(palette => (
          <Link to={`/palette/${palette.id}`}>
            <p>{palette.paletteName}</p>
          </Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
