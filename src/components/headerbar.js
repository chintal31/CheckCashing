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
import { connect } from "react-redux";
import { logout } from "../containers/Mainreducer/actions";
import { userNameInitials } from "../utils";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "../components/drawer";

function Headerbar({ logout, loggedInUser }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Check Cashing
          </Typography>
          <Avatar className={classes.red}>
            {loggedInUser
              ? userNameInitials(loggedInUser.Firstname, loggedInUser.Lastname)
              : ""}
          </Avatar>
          <ExpandMoreIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          ></ExpandMoreIcon>
          <Menu
            id="simple-menu"
            // keepMounted
            open={menu}
            onClose={handleClick}
            anchorReference="none"
            PaperProps={{
              style: {
                right: "3%",
                transform: "translateY(45%)",
              },
            }}
          >
            <MenuItem>
              <Typography variant="h6">
                {loggedInUser && loggedInUser.Firstname
                  ? `Hi ${loggedInUser.Firstname}  ${loggedInUser.Lastname}`
                  : ""}
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer open={mobileOpen} close={handleDrawerClose} />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
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

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.mainReducer && state.mainReducer.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (data) => {
      logout(dispatch, data);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Headerbar);
