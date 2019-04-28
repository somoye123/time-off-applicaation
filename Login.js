import React from 'react';
// import { Link } from 'react-router-dom'
import './login.css'

import Header from './../../header/Header'

import axios from 'axios';

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
class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: null,
          password: null,
          invalidError : false,
          errResponse: false,
          formErrors: {
            email: "",
            password: ""
          }
        };
      }
      storeToLocalstorage = (data) => {
        localStorage.setItem('userToken', data)
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          let user = {email: this.state.email, password: this.state.password}
          // window.location.replace('employee-dashboard')
          axios.post('http://localhost:6004/employee/login', user)
            .then(data => {
              const result = data.data.data;
              this.storeToLocalstorage(result);
              this.props.history.push('/employee-dashboard')
            })
            .catch(err => {
              const errorMsg = err.response ? err.response.data.message : err.response;
              this.setState({errResponse: errorMsg})
              console.log(errorMsg);
            });

        } else {
          this.setState({invalidError: true})
         
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value });
      };
    render() {
        const { formErrors } = this.state;
        return(
            <div>
             <Header isLogin={false} />
       
                <div className="jumbotron text-center bg-teal ">
                    <h1>Login Form </h1>
                </div>
                <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
                    <div className="">
                    {
                  this.state.errResponse ? <div className="alert alert-danger text-center">
                  {this.state.errResponse}</div> : ''
                }
                    <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  placeholder="Enter email" 
                          name="email"  noValidate onChange={this.handleChange}/>
                    {this.state.invalidError && (this.state.email === null) ? 
                    <p className="text-danger">* email is required</p> : '' }
                      {formErrors.email.length > 0 && (
                         <span className="text-danger">{formErrors.email}</span>
              )}
                   </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  placeholder="Password" 
                                    name="password"
                                    noValidate
                                    onChange={this.handleChange}/>
                       {this.state.invalidError && (this.state.password === null) ? 
                    <p className="text-danger">* password is required</p> : '' }
                     {formErrors.password.length > 0 && (
                <span className="text-danger">{formErrors.password}</span>
              )}
                </div>
            
                <button type="submit" className="btn btn-primary text-light">Login</button>
            
                    </div>
                </form>
            </div>

        )
    }
}
export default Login;