import React, { Component, useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import CSTprofile from './CSTprofile';
import "./App.css"
import StoreProfile from './StoreProfile';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup>
        <Link path="/app">mmmm</Link>
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
