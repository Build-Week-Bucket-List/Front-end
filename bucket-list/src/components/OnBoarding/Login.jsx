import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '30%',
    margin: '100px auto'
  },
  button: {
    margin: '25px auto'
  },
  textField: {
    margin: '0 10px'
  }
}));

const Login = props => {
  useEffect(_ =>
    {
      if(localStorage.getItem('token'))
      {
        props.history.push('/home')
      }
    }, [])
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  });

  const classes = useStyles();

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.loginUser(creds, props.history);
  };


  return (
    <div className={ classes.container }>
      <Link to="/register">Register</Link>
      <form onSubmit={ e => handleSubmit(e) }>
        <TextField
          id='username'
          name='username'
          label='Username'
          type='text'
          className={ classes.textField }
          onChange={ e => handleChange(e) }
        />
        <TextField
          id='password'
          name='password'
          label='Password'
          type='password'
          className={ classes.textField }
          onChange={ e => handleChange(e) }
        />
        <Button
          type='submit'
          color='primary'
          variant='contained'
          className={ classes.button }
        >
          Log In
        </Button>
      </form>
    </div>

  )
};

const mapStateToProps = state => {
  return {
    loginUser: state.loginUser
  }
}


export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login);
