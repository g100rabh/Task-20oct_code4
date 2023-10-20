import React from "react";
import ListLayOut from "./ListLayout";
import SideBar from "./SideBar";

import classes from "./MainUi.module.css";

const MainUi = () => {
  return (
    <div className={classes.mainuiCon}>
      <SideBar />
      <ListLayOut />
    </div>
  );
};

export default MainUi;
