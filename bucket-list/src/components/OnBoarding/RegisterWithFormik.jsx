import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { registerUser } from "../../actions"

const RegisterForm = (props) => {
  const { touched, values, errors, status } = props
  return (
    <div className="signup">
      <h1>Register For Bucket List</h1>
      <Form>
        <Field
          name="name"
          placeholder="Name"
          component={TextField}
          margin="normal"
          // fullWidth
          type="text"
        />
        <Field
          type="password"
          name="password"
          placeholder="password"
          component={TextField}
          margin="normal"
          // fullWidth
        />
        <Button type="submit">
          Submit!
        </Button>
      </Form>
    </div>
  );
};

const Register = withFormik({
  mapPropsToValues({ name, email, password}) {
    return {
      name: name || "",
      // email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    // email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
  }),

  handleSubmit(values, props) {
    console.log('testSubmit')
    console.log('username, password, history', values.name, values.password, props.props.history)
    props.props.registerUser({username: values.name, password: values.password}, props.props.history)
  }
})(RegisterForm);

const mapStateToProps = state => {
    return {};
}

const RegisterConnect = connect(mapStateToProps, {registerUser})(Register)

export default RegisterConnect
