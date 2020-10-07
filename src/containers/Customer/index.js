import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import CustomerForm from "./CustomerFormFIelds";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

function Customers({ customerData }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <Typography variant="h4" className={classes.formTitle}>
        Customer Form
      </Typography>
      <CustomerForm customerData={customerData} />
    </main>
  );
}

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#d3d3d31f",
  },
  formTitle: {
    padding: "0 20px 40px",
  },
}));

const mapStateToProps = (state) => {
  return {
    customerData: state.mainReducer && state.mainReducer.customerData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
