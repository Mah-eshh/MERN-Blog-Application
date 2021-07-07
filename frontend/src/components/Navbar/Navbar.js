import React from "react";

import { AppBar, Typography } from "material-ui/core";

import maheshblog2 from "../../images/maheshblog2";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Mahesh Blogs!..
      </Typography>
      <img className={classes.image} src={maheshblog2} alt="icon" height="60" />
    </AppBar>
  );
};

export default Navbar;
