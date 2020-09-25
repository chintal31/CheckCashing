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
          email: "",
          password: "",
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
            <div className={classes.fieldsContainer}>
              <div>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  className={classes.fields}
                />
                <br />
                <Field
                  component={TextField}
                  type="password"
                  label="Password"
                  name="password"
                  className={classes.fields}
                />
                <br />
              </div>
              <div>
                <Field
                  component={TextField}
                  name="firstName"
                  type="text"
                  label="First Name"
                  className={classes.fields}
                />
                <br />
                <Field
                  component={TextField}
                  type="text"
                  label="Last Name"
                  name="lastName"
                  className={classes.fields}
                />
              </div>
            </div>
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
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
  firstName: Yup.string().min(2, "Minimum 2 characters").required("Required!"),
  lastName: Yup.string().min(2, "Minimum 2 characters").required("Required!"),
});
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fields: {
    margin: "15px",
  },
  fieldsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: `100%`,
  },
  submitBtn: {
    margin: "20px 0",
  },
}));
