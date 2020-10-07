import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

export default function Textfield(props) {
  return (
    <Field
      fullWidth
      component={TextField}
      name={props.name}
      type={props.type}
      label={props.label}
      //      variant="outlined"
      {...props}
    />
  );
}
