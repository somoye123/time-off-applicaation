  import React, { Component } from "react";
  import Navbar1 from "../Navbars/AuthNavbar";
  import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../footer/footer.js";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formvalid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled
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
    errResponse: false,
    formErrors: {
      email: "",
      password: ""
    }
  };

  storeToLocalstorage = (data) => {
    localStorage.setItem('employee-token', data)
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      let user = { email: this.state.email, password: this.state.password }
      // window.location.replace('employee-dashboard')
      axios.post('http://localhost:3030/employee/login', user)
        .then(data => {
          const result = data.data.data;
          this.storeToLocalstorage(result);
          this.props.history.push('/employee-dashboard')
          alert("Details submitted successful.");
        })
        .catch(err => {
          const errorMsg = err.response ? err.response.data.message : err.response;
          this.setState({ errResponse: errorMsg })
          console.log(errorMsg);
        });
    } else {
      this.setState({ invaildError: true });
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? (
          ""
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
                {this.state.invaildError && this.state.email === null ? (
                  <p className="text-danger">* Email is required</p>
                ) : (
                    ""
                  )}
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

            {formvalid(this.state) ? (
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
