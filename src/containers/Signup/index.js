import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as yup from "yup";
import { LinearProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { signup } from "../Mainreducer/actions";

function SignUp({ signup, signUpFailure }) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Formik
            initialValues={{
              Firstname: "",
              Lastname: "",
              Username: "",
              password: "",
              confirmpassword: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 500);
              let body = {
                Username: values.Username,
                Firstname: values.Firstname,
                Lastname: values.Lastname,
                password: values.password,
              };
              signup(body);
            }}
            validationSchema={validationSchema}
          >
            {({ values, submitForm, isSubmitting }) => (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      InputProps={{ className: classes.input }}
                      InputLabelProps={{ className: classes.input }}
                      margin="normal"
                      required
                      fullWidth
                      name="Firstname"
                      label="First Name"
                      type="Firstname"
                      id="Firstname"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      InputProps={{ className: classes.input }}
                      InputLabelProps={{ className: classes.input }}
                      margin="normal"
                      required
                      fullWidth
                      name="Lastname"
                      label="Last Name"
                      type="Lastname"
                      id="Lastname"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      InputProps={{ className: classes.input }}
                      InputLabelProps={{ className: classes.input }}
                      type="Username"
                      margin="normal"
                      required
                      fullWidth
                      id="Username"
                      label="Username"
                      name="Username"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant="outlined"
                      component={TextField}
                      InputProps={{ className: classes.input }}
                      InputLabelProps={{ className: classes.input }}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      InputProps={{ className: classes.input }}
                      InputLabelProps={{ className: classes.input }}
                      margin="normal"
                      required
                      fullWidth
                      name="confirmpassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmpassword"
                      autoComplete="current-password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                {isSubmitting && <LinearProgress />}
                <br />
                <div className={classes.error}>{signUpFailure}</div>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Log in
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
}
const validationSchema = yup.object().shape({
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  Username: yup.string().required(),
  password: yup
    .string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmpassword: yup
    .string("Enter your password")
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Password does not match"),
});
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  error: {
    padding: "10px",
    textAlign: "center",
    color: "red",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    signUpFailure: state.mainReducer && state.mainReducer.signUpFailure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => {
      signup(dispatch, data);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
