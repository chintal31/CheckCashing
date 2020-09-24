import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Forms from "../../components/Forms";
import HeaderBar from "../../components/HeaderBar/headerbar";
import Drawer from "../../components/Drawer/drawer";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderBar />
      <Drawer />
      <Forms />
    </div>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
