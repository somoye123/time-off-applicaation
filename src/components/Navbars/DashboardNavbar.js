import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default class DashboardNavbar extends Component {
  handleLogout = () => {
    localStorage.clear("employee-token");
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-fixed-top py-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active ml-2">
                <Link className="nav-link text-light" to="/employee-dashboard">
                  Employee Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/EmployeeDashboard/teamView"
                >
                  Team View <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/employee-dashboard/new-absence"
                >
                  New Absence <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <form action="" className="form-inline">
              <Link to="/Login">
                <button
                  className="btn btn-outline-danger my-sm-0 mx-auto"
                  onClick={this.handleLogout}
                >
                  Log Out
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
