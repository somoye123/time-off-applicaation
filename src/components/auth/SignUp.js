import React, { Component } from "react";
import Navbar1 from "../Navbars/AuthNavbar";
import { Link } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const LetterRegex = RegExp(/^[A-Za-z]+$/);

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

export default class SignUp extends Component {
  state = {
    companyName: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    invaildError: false,
    formErrors: {
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  errorSate = {
    companyNameError: false
  };

  handleSubmit = e => {
    e.preventDefault();
    if (formvalid(this.state)) {
      let user = {
        companyName: this.state.companyName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };
      user = JSON.stringify(user);
      console.log(user);
      localStorage.setItem("NewUser", user);
      alert("Details submitted successful.");
    } else {
      this.setState({ invaildError: true });
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "companyName":
        formErrors.companyName =
          value.length < 4 || !LetterRegex.test(value)
            ? "Minimum of 4 character required (alphabet only)"
            : "";
        break;
      case "firstName":
        formErrors.firstName =
          value.length < 4 || !LetterRegex.test(value)
            ? "Minimum of 4 character required (alphabet only)"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 4 || !LetterRegex.test(value)
            ? "Minimum of 4 character required (alphabet only)"
            : "";
        break;
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
          <h1 className="text-capitalize text-center">Help us know you</h1>
          <form
            className="container mx-auto"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                id="companyName"
                name="companyName"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.invaildError && this.state.companyName === null ? (
                <p className="text-danger">* Company name is required</p>
              ) : (
                ""
              )}
              {<span className="text-danger">{formErrors.companyName}</span>}
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {this.state.invaildError && this.state.firstName === null ? (
                  <p className="text-danger">* First name is required</p>
                ) : (
                  ""
                )}
                {<span className="text-danger">{formErrors.firstName}</span>}
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {this.state.invaildError && this.state.lastName === null ? (
                  <p className="text-danger">* Last name is required</p>
                ) : (
                  ""
                )}
                {<span className="text-danger">{formErrors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
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

              <div className="form-group col-md-6">
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
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Nationality"
                  id="country"
                  list="countryList"
                />
                <datalist id="countryList">
                  <option value="Nigeria" />
                  <option value="Ghana" />
                  <option value="Angola" />
                  <option value="Zambia" />
                  <option value="Togo" />
                  <option value="Senegal" />
                  <option value="South Africa" />
                </datalist>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="timezone">Time Zone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Time Zone"
                  id="timezone"
                  list="zoneList"
                />
                <datalist id="zoneList">
                  <option value="West Africa/Lagos" />
                  <option value="Europe/London" />
                  <option value="America/Califonia" />
                  <option value="India/NewDelhi" />
                </datalist>
              </div>
            </div>

            {formvalid(this.state) ? (
              <button
                onClick={this.handleSubmit}
                type="button"
                className="btn btn-primary text-light"
              >
                <Link className="text-light" to="/employee-dashboard">
                  Create Account
                </Link>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary text-light">
                Create Account
              </button>
            )}
            <small>
              Already have an account?<Link to="/Login">Login</Link>
            </small>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
