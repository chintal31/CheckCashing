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
          firstName: "",
          lastName: "",
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
              name="firstName"
              type="text"
              label="First Name"
            />
            <br />
            <Field
              component={TextField}
              type="text"
              label="Last Name"
              name="lastName"
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
  firstName: Yup.string().min(2, "Minimum 2 characters").required("Required!"),
  lastName: Yup.string().min(2, "Minimum 2 characters").required("Required!"),
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
