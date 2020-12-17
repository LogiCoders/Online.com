import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Popup from "reactjs-popup";
import AddStore from "./AddStore";
import AddProduct from "./AddProduct";

const Header = (props) => {
  const [add, setAdd] = useState(true);
  const [count, setCount] = useState(0);
  const [headerPic, setheaderPic] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("order"))) {
      setCount(JSON.parse(localStorage.getItem("order")).length);
    }
  }, []);

const clearlocal=()=>{
  localStorage.clear();
}


const user = jwt_decode(localStorage.getItem("token"));




  return (
    <div className="container2">
      <nav className=" navheader">
        <div className="navheader-7">
        <p style={{float:"right",marginTop:"10px" ,marginRight:"5px",fontSize:"20px",fontStyle:"bold"}}> Welcome {user.first_name.toUpperCase()} !</p>
         <img
         src={user.image_profile}
         alt="pic"
         style={{float:"right",marginTop:"10px" ,marginRight:"5px",borderRadius:"150px"}} className="headerpPic"
       ></img>
          <ul className="navbar2-nav ">
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
                <sup
                  style={{ border: "3px solid orange", borderRadius: "30%" }}
                >
                  {count}
                </sup>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                home
              </Link>
            </li>
            <li id="dropdown" className="nav-item">
              <Link className="nav-link">Account</Link>
              <div id="select">
                <a href="/Account">My Account</a>
                <a href="/delevaryman">My delevaryman Account</a>
                
                {add ? (
                  <div>
                    {" "}
                    <Popup modal trigger={<a>Add Store</a>}>
                      {(close) => <AddStore close={close} {...props} />}
                    </Popup>
                    <Popup modal trigger={<a>Add Product</a>}>
                      {(close) => <AddProduct close={close} {...props} />}
                    </Popup>
                    <a href="/" onClick={()=>localStorage.clear()}>Log Out </a>
                  </div>
                ) : (
                  <a href="/" onClick={()=>localStorage.clear()}>Log Out </a>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;