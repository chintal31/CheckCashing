import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";

function Headerbar() {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Check Cashing
        </Typography>
        <Avatar className={classes.red}>{"CD"}</Avatar>
        <ExpandMoreIcon
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        ></ExpandMoreIcon>
        <Menu
          id="simple-menu"
          // keepMounted
          open={menu}
          onClose={closeMenu}
          anchorReference="none"
          PaperProps={{
            style: {
              right: "3%",
              transform: "translateY(45%)",
            },
          }}
        >
          {/* <Divider /> */}
          <MenuItem>Logout</MenuItem>
          <Divider />
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  red: {
    margin: "10px",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#ff1744",
  },
}));

export default Headerbar;
