import React from "react";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { registerUser } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "30%",
    margin: "100px auto"
  },
  button: {
    margin: "25px 0",
    backgroundColor: "#DA9417"
    
  },
  textField: {
    margin: "0",
  }
}));

const RegisterForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>

      <Form>
        <Field
          name="name"
          label="Username"
          component={TextField}
          margin="normal"
          type="text"
          className={classes.textField}
          fullWidth
        />
        <Field
          type="password"
          name="password"
          label="Password"
          component={TextField}
          className={classes.textField}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          fullWidth
          >
          Register
        </Button>
      </Form>
    </div>
  );
};

const Register = withFormik({
  mapPropsToValues({ name, password }) {
    return {
      name: name || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    password: Yup.string().required("Password is required")
  }),

  handleSubmit(values, { props }) {
    props.registerUser(
      { username: values.name, password: values.password },
      props.history
    );
  }
})(RegisterForm);

const mapStateToProps = state => {
  return {};
};

const RegisterConnect = connect(
  mapStateToProps,
  { registerUser }
)(Register);

export default RegisterConnect;
