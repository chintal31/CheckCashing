import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import {
  InputLabel,
  FormControl,
  Button,
  LinearProgress,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { Select, CheckboxWithLabel, Checkbox } from "formik-material-ui";
import TextField from "../../components/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import ToastMsg from "../../components/toastmsg";
import * as Yup from "yup";
import axios from "axios";

const CustomerForm = (props) => {
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
    //Zip: props.customerData ? props.customerData.Zip : "",
  };
  const [toastMessage, setToastMessage] = useState({});
  const closeSnackBar = () => {
    setToastMessage({});
  };
  return (
    <>
      <ToastMsg toastMessage={toastMessage} open={true} close={closeSnackBar} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
          if (props.customerData.FileNo) {
            //updateCustomer
            let res = await axios.post(
              "http://localhost:5000/updateCustomer",
              values
            );
            if (res.status === 200) {
              setToastMessage({
                message: "Your details have been updated successfully.",
                status: "success",
              });
            }
          } else {
            //addCustomer
            let res = await axios.post(
              "http://localhost:5000/addCustomer",
              values
            );
            if (res.status === 200) {
              setToastMessage({
                message: "Customer added successfully.",
                status: "success",
              });
            }
          }
        }}
      >
        {({ values, submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Firstname"
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Middlename"
                  type="text"
                  label="Middle Name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Lastname"
                  type="text"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="Coments"
                  type="text"
                  label="Comments"
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
                <TextField
                  fullWidth
                  name="Address"
                  type="text"
                  multiline
                  label="Address"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField fullWidth name="SSN" type="text" label="SSN" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth name="DRL" type="text" label="DRL" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Field
                    fullWidth
                    component={KeyboardDatePicker}
                    label="Date Of Birth"
                    name="DateOfBirth"
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Company"
                  type="text"
                  label="Company"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth name="City" type="text" label="City" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="HomeNO"
                  type="number"
                  label="Home No"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="ZipCode"
                  type="number"
                  label="ZipCode"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Cell1"
                  type="number"
                  label="Cell 1"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Cell2"
                  type="number"
                  label="Cell 2"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="CompanyNo"
                  type="number"
                  label="Company No"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="EmployeePHNo"
                  type="number"
                  label="Employee PhNo"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Employment"
                  type="text"
                  label="Employment"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="IDState">IDState</InputLabel>
                  <Field
                    fullWidth
                    component={Select}
                    name="IDState"
                    inputProps={{
                      id: "IDState",
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Field
                    fullWidth
                    component={KeyboardDatePicker}
                    label="Id Expiry Date"
                    name="IDExpdate"
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Refname"
                  type="text"
                  label="Reference Name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="Relationship"
                  type="text"
                  label="Relationship"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="refComment"
                  type="text"
                  label="Ref comments"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="RefphNo"
                  type="text"
                  label="Ref Ph No"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Field
                    fullWidth
                    component={KeyboardDatePicker}
                    label="Customer Since date"
                    name="CustSincedate"
                  />
                </MuiPickersUtilsProvider>
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
                <TextField
                  fullWidth
                  name="FileNo"
                  type="text"
                  label="File No"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={CheckboxWithLabel}
                  type="checkbox"
                  id="UpdateReqd"
                  name="UpdateReqd"
                  Label={{ label: "Update Reqd" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  fullWidth
                  component={CheckboxWithLabel}
                  name="hadbadcheck"
                  type="checkbox"
                  Label={{ label: "Has bad check" }}
                />
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
                Submit
              </Button>
              {/* </Grid> */}
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

const validationSchema = Yup.object({
  CustLevel: Yup.number().required("Required!"),
  DateOfBirth: Yup.date().required("Required!"),
  Firstname: Yup.string().min(3, "Minimum 3 characters").required("Required!"),
  Lastname: Yup.string().min(3, "Minimum 3 characters").required("Required!"),
  Status: Yup.number().required("Required!"),
});

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    margin: "20px 0",
  },
  root: {
    flexGrow: 1,
    padding: "20px",
  },
}));

export default CustomerForm;
