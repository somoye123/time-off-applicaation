import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Navbar1 extends Component {
  render() {
    return (
       <React.Fragment>
         <nav className="navbar navbar-light bg-light">
           <Link to="/">
             <span className="navbar-brand mb-0 h1">TimeOff.Management</span>
           </Link>
           <form action="" className="form-inline">
            <Link to="/SignUp">
              <button className="btn btn-outline-success my-sm-0">SignUp</button>
            </Link>
            <Link to="/Login">
              <button className="btn btn-outline-success my-sm-0">Log In</button>
            </Link>

           </form>
         </nav>
       </React.Fragment>
    );
  }
}
