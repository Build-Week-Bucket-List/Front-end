import React from 'react';
import { Route, Link } from 'react-router-dom'
import Login from './components/OnBoarding/Login'
import Register from './components/OnBoarding/Register'
import RegisterWithFormik from './components/OnBoarding/RegisterWithFormik'
import BucketList from './components/Bucket/BucketList'
import FriendsPage from './components/Friends/FriendsPage'
import PrivateRoute from './components/OnBoarding/PrivateRoute'
import TabBar from './components/OnBoarding/TabBar'
import './App.css';
import Archive from './components/Bucket/Archive';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={TabBar} />
      <Route path="/register" component={RegisterWithFormik} />
      <PrivateRoute path="/home" component={BucketList} />
      <PrivateRoute path='/archive' component={Archive} />
      <PrivateRoute path="/friends" component={FriendsPage} />
    </div>
  );
}

export default App;
