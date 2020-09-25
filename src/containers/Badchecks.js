import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Toolbar, Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

export default function Customers() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <Formik
        initialValues={{
          checkNumber: "",
          amount: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="checkNumber"
              type="number"
              label="Check Number"
            />
            <br />
            <Field
              component={TextField}
              type="number"
              label="Amount"
              name="amount"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              className={classes.submitBtn}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

const validationSchema = Yup.object({
  // full_name: Yup.string()
  //   .min(2, "Mininum 2 characters")
  //   .max(15, "Maximum 15 characters")
  //   .required("Required!"),
  checkNumber: Yup.number()
    .min(4, "Minimun 4 characters")
    .required("Required!"),
  amount: Yup.number().required("Required!"),
  // confirm_password: Yup.string()
  //   .oneOf([Yup.ref("password")], "Password's not match")
  //   .required("Required!"),
});
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  submitBtn: {
    margin: "20px 0",
  },
}));
