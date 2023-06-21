import React from "react";
import Header from "./Header";

import classes from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={classes.layoutContainer}>
      <Header />
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Layout;
