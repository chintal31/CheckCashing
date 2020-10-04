import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { search } from "./Mainreducer/actions";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

function Search({ search }) {
  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
    let value = document.getElementById("search").value;
    search(value);
  };
  return (
    <main className={classes.content}>
      <Toolbar />
      <form>
        <div className={classes.search}>
          <TextField
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            id="search"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton type="submit" onClick={handleSearch}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </div>
      </form>
    </main>
  );
}

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    border: "1px solid darkgrey",
    borderRadius: "5px",
    width: "100%",
    padding: "5px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (data) => {
      search(dispatch, data);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
