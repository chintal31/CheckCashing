import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Forms from "../components/Forms";
import HeaderBar from "../components/headerbar";
import Drawer from "../components/drawer";

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
