import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import {
  Toolbar,
  Grid,
  InputLabel,
  FormControl,
  Button,
  MenuItem,
  LinearProgress,
} from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import * as Yup from "yup";
import Table from "../components/table";
import Typography from "@material-ui/core/Typography";

export default function Badchecks(props) {
  const classes = useStyles();
  const initialValues = {
    Firstname: props.customerData ? props.customerData.Firstname : "",
    Middlename: props.customerData ? props.customerData.Middlename : "",
    Lastname: props.customerData ? props.customerData.Lastname : "",
    Coments: props.customerData ? props.customerData.Coments : "",
    Status: props.customerData ? props.customerData.Status : "",
    CustLevel: props.customerData ? props.customerData.CustLevel : "",
    CheckType: props.customerData ? props.customerData.CheckType : "",
    SSN: props.customerData ? props.customerData.SSN : "",
    DRL: props.customerData ? props.customerData.DRL : "",
    Company: props.customerData ? props.customerData.Company : "",
    DateOfBirth: props.customerData ? props.customerData.DateOfBirth : "",
    Address: props.customerData ? props.customerData.Address : "",
    City: props.customerData ? props.customerData.City : "",
    ZipCode: props.customerData ? props.customerData.ZipCode : "",
    HomeNO: props.customerData ? props.customerData.HomeNO : "",
    Cell1: props.customerData ? props.customerData.Cell1 : "",
    Cell2: props.customerData ? props.customerData.Cell2 : "",
    CompanyNo: props.customerData ? props.customerData.CompanyNo : "",
    Employment: props.customerData ? props.customerData.Employment : "",
    EmployeePHNo: props.customerData ? props.customerData.EmployeePHNo : "",
    IDState: props.customerData ? props.customerData.IDState : "",
    IDExpdate: props.customerData ? props.customerData.IDExpdate : "",
    Refname: props.customerData ? props.customerData.Refname : "",
    Relationship: props.customerData ? props.customerData.Relationship : "",
    refComment: props.customerData ? props.customerData.refComment : "",
    RefphNo: props.customerData ? props.customerData.RefphNo : "",
    CustSincedate: props.customerData ? props.customerData.CustSincedate : "",
    CustlastMod: props.customerData ? props.customerData.CustlastMod : "",
    FileNo: props.customerData ? props.customerData.FileNo : "",
    UpdateReqd: props.customerData ? props.customerData.UpdateReqd : false,
    hadbadcheck: props.customerData ? props.customerData.hadbadcheck : "",
    PictureData: props.customerData ? props.customerData.PictureData : "",
    FormData: props.customerData ? props.customerData.FormData : "",
  };
  return (
    <main className={classes.content}>
      <Toolbar />
      <Table
        columns={[
          { title: "Company", field: "name" },
          { title: "PhoneNo", field: "surname" },
          { title: "Check No", field: "birthYear", type: "numeric" },
          { title: "Date", field: "birthYear", type: "numeric" },
          { title: "Bank", field: "birthYear" },
          { title: "Amount", field: "birthYear", type: "numeric" },
          { title: "Commission", field: "birthYear", type: "numeric" },
          { title: "Total", field: "birthYear", type: "numeric" },
          { title: "Cash Date", field: "birthYear", type: "numeric" },
        ]}
        data={[]}
        title={"Bad Check Table"}
      />
      <Typography variant="h4" className={classes.formTitle}>
        Bad Check Form
      </Typography>

      <Formik
        initialValues={initialValues}
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
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Firstname"
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Middlename"
                  type="text"
                  label="Middle Name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Lastname"
                  type="text"
                  label="Last Name"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="Status">Status</InputLabel>
                  <Field
                    component={Select}
                    name="Status"
                    inputProps={{
                      id: "Status",
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="level">Level</InputLabel>
                  <Field
                    component={Select}
                    name="CustLevel"
                    inputProps={{
                      id: "level",
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="CheckType">Check Type</InputLabel>
                  <Field
                    fullWidth
                    component={Select}
                    name="CheckType"
                    inputProps={{
                      id: "CheckType",
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Address"
                  type="text"
                  multiline
                  label="Address"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="SSN"
                  type="text"
                  label="SSN"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Field
                    fullWidth
                    component={KeyboardDatePicker}
                    label="Customer last Modified"
                    name="CustlastMod"
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="FileNo"
                  type="text"
                  label="File No"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Coments"
                  type="text"
                  label="Comments"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Company"
                  type="text"
                  label="Company"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="CompanyNo"
                  type="number"
                  label="Company No"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="CheckNo"
                  type="number"
                  label="Check No"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Field
                    fullWidth
                    component={KeyboardDatePicker}
                    label="Customer last Modified"
                    name="CustlastMod"
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="Status">Bank</InputLabel>
                  <Field
                    component={Select}
                    name="Bank"
                    inputProps={{
                      id: "Bank",
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Amount"
                  type="number"
                  label="Amount"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="percentage"
                  type="number"
                  label="%"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="commission"
                  type="number"
                  label="Sommission"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Total"
                  type="number"
                  label="Total"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Amount"
                  type="number"
                  label="Amount"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Comm"
                  type="number"
                  label="Comm"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="Payout"
                  type="number"
                  label="Payout"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={TextField}
                  name="no_of_checks"
                  type="number"
                  label="No of checks"
                />
              </Grid>
            </Grid>
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              className={classes.submitBtn}
            >
              Add Check
            </Button>
            <Button
              variant="contained"
              color="primary"
              //onClick={clear}
              className={classes.submitBtn}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="primary"
              // disabled={isSubmitting}
              // onClick={submitForm}
              className={classes.submitBtn}
            >
              Done
            </Button>
            <Button
              variant="contained"
              color="primary"
              //disabled={isSubmitting}
              //onClick={submitForm}
              className={classes.submitBtn}
            >
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

const validationSchema = Yup.object({
  checkNumber: Yup.number()
    .min(4, "Minimun 4 characters")
    .required("Required!"),
  amount: Yup.number().required("Required!"),
});
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  submitBtn: {
    margin: "20px",
  },
  formTitle: {
    padding: "40px",
  },
}));
