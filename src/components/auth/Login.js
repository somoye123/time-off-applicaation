import React, { Component } from "react";
import Navbar1 from "../Navbars/AuthNavbar";
import env from "../../env";
import axios from "axios";
import Swal from "sweetalert2";
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
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      invalidError: false,
      errResponse: false,
      formErrors: {
        email: "",
        password: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem("employee-token");

    if (token) return this.props.history.push("/employee-dashboard");
  }

  storeToLocalstorage(data) {
    localStorage.setItem("employee-token", data);
  }

  displaySuccessAlert() {
    Swal.fire(
      "Success",
      "verification message has been sented",
      "success"
    ).then(() => {
      document.querySelector("input[name=email]").value = "";
      document.querySelector("input[name=password]").value = "";
    });
  }

  resendMail = async () => {
    this.setState({ errResponse: false });
    try {
      const body = { email: this.state.email };
      await axios.post(`${env.api}/employee/Resend`, body);
      this.displaySuccessAlert();
    } catch (error) {
      console.log(error);
    }
  };

  async handleSubmit(e) {
    e.preventDefault();
    if (formvalid(this.state)) {
      this.setState({ errResponse: false });
      let body = { email: this.state.email, password: this.state.password };
      try {
        const data = await axios.post(`${env.api}/employee/login`, body);
        const token = data.data.token;
        this.storeToLocalstorage(token);
        Swal.fire("Success", "Details submitted successful.", "success");
        this.props.history.push("/employee-dashboard");
      } catch (err) {
        const errorMsg = err.response
          ? err.response.data.message
          : err.response;
        this.setState({ errResponse: errorMsg });
        alert(`${errorMsg}`);
      }
    } else {
      this.setState({ invaildError: true });
    }
  }

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
          <h1 className="text-capitalize text-center">login Form</h1>
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

            <button type="submit" className="btn btn-primary text-light">
              Login
            </button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
