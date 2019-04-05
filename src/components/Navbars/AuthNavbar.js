import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar1 extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-dark py-3">
          <Link className="text-light" to="/">
            TimeOff.Management <span className="sr-only">(current)</span>
          </Link>
          <form action="" className="form-inline">
            <Link to="/SignUp">
              <button className="btn btn-outline-success my-sm-0 d-none d-md-inline mx-md-4">
                SignUp
              </button>
            </Link>
            <Link to="/Login">
              <button className="btn btn-outline-success my-sm-0 mx-auto">
                Log In
              </button>
            </Link>
          </form>
        </nav>
      </React.Fragment>
    );
  }
}
