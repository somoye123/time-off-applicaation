import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./components/home/LandingPage";
import AbsenceForm from "./components/dashboard/AbsenceForm";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import TeamViewDashboard from "./components/dashboard/TeamViewDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/Login" exact component={Login} />
            <Route path="/employee-dashboard" exact component={EmployeeDashboard} />
            <Route
              path="/EmployeeDashboard:id"
              component={TeamViewDashboard}
            />
            <Route path="/employee-dashboard/new-absence" exact component={AbsenceForm} />
            <Route component={LandingPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
