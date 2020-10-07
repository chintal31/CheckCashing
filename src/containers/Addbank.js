import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import { Toolbar, Button, LinearProgress, Grid } from "@material-ui/core";
import Textfield from "../components/TextField";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addBank } from "./Mainreducer/actions";
import ToastMsg from "../components/toastmsg";

function AddBank({ addBankFailure, addBankSuccess }) {
  const classes = useStyles();
  const [toastMessage, setToastMessage] = React.useState({});
  const closeSnackBar = () => {
    setToastMessage({});
  };
  return (
    <main className={classes.content}>
      <Toolbar />
      {addBankSuccess && addBankSuccess.message && (
        <ToastMsg
          toastMessage={addBankSuccess.message}
          open={true}
          close={closeSnackBar}
        />
      )}
      <Formik
        initialValues={{
          Bankname: "",
          BankPhno: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        //props.addBank(values);
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Textfield
                  fullWidth
                  name="Bankname"
                  type="text"
                  label="Bank Name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Textfield
                  fullWidth
                  name="BankPhno"
                  type="number"
                  label="Bank Ph no"
                />
              </Grid>
            </Grid>

            {isSubmitting && <LinearProgress />}
            <br />
            <div className={classes.error}>{addBankFailure}</div>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              className={classes.submitBtn}
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

const validationSchema = Yup.object({
  Bankname: Yup.string().min(3, "Minimum 3 characters").required("Required!"),
  BankPhno: Yup.number().required("Required!"),
});
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  submitBtn: {
    margin: "20px 0",
  },
  error: {
    padding: "10px",
    textAlign: "center",
    color: "red",
  },
}));

const mapStateToProps = (state) => {
  return {
    addBankSuccess: state.mainReducer && state.mainReducer.addBankSuccess,
    addBankFailure: state.mainReducer && state.mainReducer.addBankFailure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBank: (data) => {
      dispatch(addBank(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBank);
