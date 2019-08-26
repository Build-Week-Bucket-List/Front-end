import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import Textfield from '@material-ui/core/Textfield';
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
    props.loginUser(creds);
  };


  return (
    <div className={ classes.container }>
      <form onSubmit={ e => handleSubmit(e) }>
        <Textfield
          id='username'
          name='username'
          label='Username'
          className={ classes.textField }
          onChange={ e => handleChange(e) }
        />
        <Textfield
          id='password'
          name='password'
          label='Password'
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
