import React, { Component } from "react";
import env from "../../env";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "react-calendar";
import Navbar from "../Navbars/DashboardNavbar";
import Footer from "../footer/footer";

const leaveType = [
  { name: "Sabbatical", days: 20 },
  { name: "Maternity", days: 20 },
  { name: "Bereavement", days: 10 },
  { name: "Health", days: 10 },
  { name: "Marriage", days: 5 },
  { name: "Jury Duty", days: 5 },
  { name: "Travel", days: 7 },
  { name: "Vacation", days: 5 },
  { name: "Holiday", days: 5 },
  { name: "Paternity", days: 5 },
  { name: "Others", days: 5 }
];

export default class EmployeeDashboard extends Component {
  state = {
    loading: true,
    showMore: false,
    user: "",
    showMoreText: "Show More",
    userInfo: "",
    allLeaveRequest: "",
    availableLeaveRequest: ""
  };

  convertToshorDate = date => {
    return new Date(date).toLocaleDateString();
  };
  getStatusColor(status) {
    switch (status) {
      case "declined":
        return "badge-danger";
      case "approved":
        return "badge-success";
      default:
        return "badge-warning";
    }
  }
  getAvailableRequest(requests) {
    if (requests) {
      const leave = requests.filter(item => item.status === "pending");
      this.setState({ availableLeaveRequest: leave });
    }
  }

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

      this.setState({
        loading: false,
        user: res.data.data,
        allLeaveRequest: leave.data.data
      });
      console.log(this.state.user);
      console.log(this.state.allLeaveRequest);
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
    if (this.state.loading) return <p>loading...</p>;
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
                  Available Request
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
                  Used so far
                </div>
                <div className="card-body">
                  {this.state.allLeaveRequest.length > 0 ? (
                    <ul className="list-group">
                      {this.state.allLeaveRequest.map((item, index) => {
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
                    <h6 className="mt-5 text-center">
                      No Pending leave request
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
                  <i className="fa fa-user-circle-o fa-3x" />
                  <div className="mt-2">
                    <h6>
                      Name :{this.state.user.firstName}{" "}
                      {this.state.user.lastName}
                    </h6>
                    <h6>Department : {this.state.user.department}</h6>
                    <h6>Manager : {this.state.user.manager}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center mt-4 mb-3">
            Calendar
          </h2>
          <div className="row align-content-center">
            {this.state.allLeaveRequest.length > 0 ? (
              this.state.allLeaveRequest.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 ">
                    <Calendar value={new Date(item.startDate)} />
                  </div>
                );
              })
            ) : (
              <h6>No Calender</h6>
            )}
          </div>
          <div className="d-flex justify-content-center  mt-4 mb-3  container">
            <h4>All Absences</h4>
          </div>
          <div className="row mb-5 py-3">
            <table className="table container table-sm ">
              <thead>
                <tr>
                  <th scope="col">Types</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Dates</th>
                  <th scope="col">Status</th>
                  <th scope="col" />
                  <th scope="col">Approved By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Study leave</td>
                  <td>10</td>
                  <td>2021/1/15 - 2021/1/25</td>
                  <td>Approved</td>
                  <td>
                    <span className="mx-2 text-danger">
                      <i className="fas fa-trash" />
                    </span>
                  </td>
                  <td>Kunle</td>
                </tr>
                <tr>
                  <td>Health</td>
                  <td>5</td>
                  <td>2019/3/22 - 2019/3/27</td>
                  <td>Pending</td>
                  <td>
                    <span className="mx-2 text-danger">
                      <i className="fas fa-trash" />
                    </span>
                  </td>
                  <td>Mayowa</td>
                </tr>
                <tr>
                  <td>Holiday</td>
                  <td>10</td>
                  <td>2019/4/5 - 2019/4/15</td>
                  <td>Pending</td>
                  <td>
                    <span className="mx-2 text-danger">
                      <i className="fas fa-trash" />
                    </span>
                  </td>
                  <td>Kunle</td>
                </tr>
                <tr>
                  <td>Time Off</td>
                  <td>14</td>
                  <td>2019/5/01 - 2019/5/15</td>
                  <td>Pending</td>
                  <td>
                    <span className="mx-2 text-danger">
                      <i className="fas fa-trash" />
                    </span>
                  </td>
                  <td>Mayowa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
