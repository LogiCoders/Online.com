import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import CSTprofile from './CSTprofile';
import "./App.css"
import StoreProfile from './StoreProfile';

// import  'bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const App = (props) => {
  const [storeId, setStoreId] = useState(6)
  return (
    <Router>
      <div className="app">
        <p>APP</p>
        <Link  path="/app">mmmm</Link>
        <Route
          exact
          path="/profile/:id"
          render={(props) => <CSTprofile  {...props} />}
        />

        <Route
          exact
          path="/store/:id"
          render={(props) => <StoreProfile name={storeId} sId={9}{...props} />}
        />
      </div>
    </Router>
  )
}


export default App
