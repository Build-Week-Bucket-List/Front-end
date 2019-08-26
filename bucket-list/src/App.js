import React from 'react';
import { Route, Link } from 'react-router-dom'
import Login from './components/OnBoarding/Login'
import Register from './components/OnBoarding/Register'
import BucketList from './components/Bucket/BucketList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/register" />
      <Link to="/" />
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={BucketList} />
    </div>
  );
}

export default App;
