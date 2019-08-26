import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "30%",
    margin: "100px auto"
  },
  button: {
    margin: "25px auto"
  },
  textField: {
    margin: "0 10px"
  }
}));

const Register = props => {
	const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const classes = useStyles();

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
		dispatch(registerUser(creds, props.history))
	};

  return (
    <div className={classes.container}>
      <Link to="/">
        Login
      </Link>
      <form onSubmit={e => handleSubmit(e)}>
        <TextField
          id="username"
          name="username"
          label="Username"
          className={classes.textField}
          onChange={e => handleChange(e)}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          className={classes.textField}
          onChange={e => handleChange(e)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.button}
        >
          Register
        </Button>
      </form>
    </div>
  );
};
export default Register;
