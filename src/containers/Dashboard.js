import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Forms from "../components/Forms";
import HeaderBar from "../components/headerbar";

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderBar />
      <Forms />
    </div>
  );
}

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
