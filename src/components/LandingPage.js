import React, { Component } from "react";
export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">TimeOff.Management</span>
          <form action="" className="form-inline">
            <button className="btn btn-outline-success my-sm-0">Log In</button>
          </form>
        </nav>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">TimeOff.Management"</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button class="btn btn-primary">
              Sign Up
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
