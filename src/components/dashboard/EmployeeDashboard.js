import React, { Component } from "react";
import env from "../../env";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "react-calendar";
import Navbar from "../Navbars/DashboardNavbar";
import Footer from "../footer/footer";

const leaveType = [
  { name: "Sabbatical", days: 20 },
  { name: "Maternity", days: 20 }
  // { name: "Bereavement", days: 10 },
  // { name: "Health", days: 10 }
  // { name: "Marriage", days: 5 },
  // { name: "Jury Duty", days: 5 },
  // { name: "Travel", days: 7 },
  // { name: "Vacation", days: 5 },
  // { name: "Holiday", days: 5 },
  // { name: "Paternity", days: 5 },
  // { name: "Others", days: 5 }
];

export default class EmployeeDashboard extends Component {
  state = {
    loading: true,
    showMore: false,
    user: "",
    showMoreText: "Show More",
    allLeaveRequest: "",
    availableLeaveRequest: "",
    slicedRequest: ""
  };

  convertToshorDate = date => {
    return new Date(date).toLocaleDateString();
  };

  async componentDidMount() {
    try {
      const token = localStorage.getItem("employee-token");

      if (!token) return this.props.history.push("/Login");

      const res = await axios.get(`${env.api}/employee/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const leave = await axios.get(`${env.api}/leave`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const request = leave.data.data;
      const sliced = request.slice(-1);

      this.setState({
        loading: false,
        user: res.data.data,
        allLeaveRequest: request,
        slicedRequest: sliced
      });
    } catch (err) {
      if (localStorage.getItem("employee-token")) {
        localStorage.removeItem("employee-token");
      }
      this.props.history.push("/Login");
    }
  }

  handeleShowMore = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  };

  render() {
    if (this.state.loading)
      return (
        <p>
          loading <i className="fa fa-spinner" />{" "}
        </p>
      );
    return (
      <React.Fragment>
        <Navbar />
        <div className="ml-3 mt-3">
          <h3>Employee Dashboard</h3>
          <h5 className="text-primary">{`${this.state.user.firstName} ${
            this.state.user.lastName
          }`}</h5>
        </div>
        <div className="container">
          <h3 className="text-center">Statistics</h3>
          <div className="row mt-5">
            <div className="col-sm-10 col-md-6 col-lg-3">
              <div className="card">
                <div className="card-header bg-secondary text-light">
                  Days Remaining
                </div>
                <div className="card-body">
                  <h1>10 Days</h1>
                  <h6>Out Of 20 Working Days</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-3 ">
              <div className="card">
                <div className="card-header bg-secondary text-light">
                  TimeOff Types
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {leaveType.map((item, index) => {
                      return (
                        <div key={index}>
                          <li className="list-group-item">
                            {item.name}
                            <span className="badge badge-success float-right">
                              {item.days}
                            </span>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-3">
              <div className="card">
                <div className="card-header bg-secondary text-light">
                  Most Recent Request
                </div>
                <div className="card-body">
                  {this.state.slicedRequest.length > 0 ? (
                    <ul className="list-group">
                      {this.state.slicedRequest.map((item, index) => {
                        return (
                          <div key={index}>
                            <li className="list-group-item">
                              {item.leaveType}
                              <span className="badge badge-primary float-right ">
                                {this.convertToshorDate(item.startDate)}
                              </span>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  ) : (
                    <h6 className="mt-4 pb-4 text-center">
                      No Pending leave Request
                    </h6>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-3">
              <div className="card">
                <div className="card-header bg-secondary text-light">
                  Profile
                </div>
                <div className="card-body text-center">
                  <h6>
                    Name :{this.state.user.firstName} {this.state.user.lastName}
                  </h6>
                  <h6>Department : {this.state.user.department}</h6>
                  <h6>Manager : {this.state.user.manager}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center mt-4 mb-3">Calendar</h2>
          <div className="row align-content-center">
            {this.state.allLeaveRequest.length > 0 ? (
              this.state.allLeaveRequest.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 my-3">
                    <Calendar
                      value={[
                        new Date(item.startDate),
                        new Date(item.stopDate)
                      ]}
                    />
                  </div>
                );
              })
            ) : (
              <h6>No Active Calender Kindly Fill A New Absence</h6>
            )}
          </div>
          <div className="d-flex justify-content-center  mt-4 mb-3  container">
            <h4>All Absences</h4>
          </div>
          <div className="row mb-5 py-3">
            {this.state.allLeaveRequest.length === 0 ? (
              <h6>No Available Leave Request</h6>
            ) : (
              <table className="table table-hover container table-sm">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Duration</th>
                    <th>Dates</th>
                    <th>Status</th>
                    <th />
                    <th>Aprroved By</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.allLeaveRequest.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.leaveType}</td>
                        <td>{item.duration}</td>
                        <td>
                          {this.convertToshorDate(item.startDate)}
                          {" - "}
                          {this.convertToshorDate(item.stopDate)}
                        </td>
                        <td>Pending</td>
                        <td>
                          <span className="mx-2 text-danger">
                            <i className="fas fa-trash" />
                          </span>
                        </td>
                        <td>Ireti</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
