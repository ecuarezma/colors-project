import sizes from "./sizes";
export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "5vh"
  },

  logo: {
    marginRight: "15px",
    padding: "0 13px",
    backgroundColor: "#eceff1",
    "& a": {
      color: "#454545"
    }
  },

  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    [sizes.down("sm")]: {
      width: "150px"
    }
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
};
