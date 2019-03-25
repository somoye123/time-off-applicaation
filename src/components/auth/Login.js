import React, { Component } from "react";
import Navbar1 from "../Navbars/AuthNavbar";
import { Link } from "react-router-dom";
import Footer from "../footer/footer.js";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default class Login extends Component {
  state = {
    email: null,
    password: null,
    invalidError: false,
    formErrors: {
      email: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      let user = { email: this.state.email, password: this.state.password };
      user = JSON.stringify(user);
      console.log(user);
      localStorage.setItem("currentUser", user);
      alert("You login successfully");
    } else {
      this.setState({ invalidError: true });
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? (
          <p className="text-success">Valid email</p>
        ) : (
          <p className="text-danger">Provide a valid email address</p>
        );
        break;
      case "password":
        formErrors.password =
          value.length < 7 ? (
            <p className="text-danger">Weak password</p>
          ) : (
            <p className="text-success">Strong password</p>
          );
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <React.Fragment>
        <Navbar1 />
        <div className="container">
          <h1 className="text-capitalize text-center">login form</h1>
          <form
            className="container mb-5"
            onSubmit={this.handleSubmit}
            noValidate
            style={{ padding: "2% 20%" }}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter a Valid Email"
                id="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.invaildError && this.state.email === null ? 
               <p className="text-danger">* Email is required</p>
              : 
                ""
              }
              {<span className="text-danger">{formErrors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.invaildError && this.state.password === null ? (
                <p className="text-danger">* Password is required</p>
              ) : (
                ""
              )}
              {<span className="text-danger">{formErrors.password}</span>}
            </div>

            {formValid(this.state) ? (
              <button
                onClick={this.handleSubmit}
                type="button"
                className="btn btn-primary text-light"
              >
                <Link className="text-light" to="/employee-dashboard">
                  Login
                </Link>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary text-light">
                Login
              </button>
            )}
          </form>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}
