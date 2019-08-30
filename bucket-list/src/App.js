import React from 'react';
import { Route } from 'react-router-dom'
import RegisterWithFormik from './components/OnBoarding/Register'
import BucketList from './components/Bucket/BucketList'
import FriendsPage from './components/Friends/FriendsPage'
import PrivateRoute from './components/OnBoarding/PrivateRoute'
import TabBar from './components/OnBoarding/TabBar'
import './App.css';
import Archive from './components/Bucket/Archive';
import ViewFriend from './components/Friends/ViewFriend';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={TabBar} />
      <Route path="/register" component={RegisterWithFormik} />
      <PrivateRoute path="/home" component={BucketList} />
      <PrivateRoute path='/archive' component={Archive} />
      <PrivateRoute path="/friends" component={FriendsPage} />
      <PrivateRoute path="/friend/:username" component={ViewFriend} />
    </div>
  );
}

export default App;
