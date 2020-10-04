import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import CustomerForm from "./CustomerFormFIelds";
import { connect } from "react-redux";

function Customers({ customerData }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <CustomerForm customerData={customerData} />
    </main>
  );
}

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    customerData: state.mainReducer && state.mainReducer.customerData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
