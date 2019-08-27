import React from 'react';
import { Route, Link } from 'react-router-dom'
import Login from './components/OnBoarding/Login'
import Register from './components/OnBoarding/Register'
import RegisterWithFormik from './components/OnBoarding/RegisterWithFormik'
import BucketList from './components/Bucket/BucketList'
import PrivateRoute from './components/OnBoarding/PrivateRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={RegisterWithFormik} />
      <PrivateRoute path="/home" component={BucketList} />
    </div>
  );
}

export default App;
