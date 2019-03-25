import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "react-calendar";
import Navbar from "../Navbars/DashboardNavbar";
import Footer from "../footer/footer";
import Welcome from "./welcome";

const Fullname = "Somoye Ayotunde";
const WelcomeUser = `Welcome ${Fullname}`;

const calendarDate = [
  new Date(2019, 0, 9),
  new Date(2019, 1, 23),
  new Date(2018, 2, 25),
  new Date(2019, 3, 11)
];

const MoreCalendarDate = [
  new Date(2019, 0, 9),
  new Date(2019, 1, 23),
  new Date(2018, 2, 25),
  new Date(2019, 3, 11),
  new Date(2019, 4, 2),
  new Date(2019, 5, 13),
  new Date(2018, 6, 25),
  new Date(2019, 7, 21),
  new Date(2019, 8, 16),
  new Date(2019, 9, 8),
  new Date(2018, 10, 30),
  new Date(2019, 11, 24)
];

const requests = [
  { name: "Medical Checkup", date: "12/03/2019" },
  { name: "Maternity Leave", date: "23/02/2019" },
  { name: "Vacation", date: "14/01/2019" }
];

const employeeDetail = {
  name: "Somoye Ayotunde",
  departement: "Information Technology",
  position: "FullStack Developer"
};

export default class EmployeeDashboard extends Component {
  state = {
    showMore: false
  };
  handeleShowMore = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Welcome />
        <p className="text-center">{WelcomeUser}</p>
        <div className="ml-3 mt-3">
          <h3>Employee Dashboard</h3>
          <h5 className="text-primary">{Fullname}</h5>
        </div>
        <div className="container">
          <h3 className="text-center">Statistics</h3>
          <div className="row mt-5">
            <div className="col-sm-10 col-md-6 col-lg-3 ">
              <div className="card">
                <div className="card-header bg-primary text-light">
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
                <div className="card-header bg-primary text-light">
                  Available Request
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {requests.map(item => {
                      return (
                        <div key={item.date}>
                          <li className="list-group-item">
                            {item.name}
                            <span className="badge badge-success float-right">
                              {item.date}
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
                <div className="card-header bg-primary text-light">
                  Used so far
                </div>
                <div className="card-body">
                  <h6>Sick leave</h6>
                  <h6>Study leave</h6>
                  <h6>Travel</h6>
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
                    <h6>Name : {employeeDetail.name}</h6>
                    <h6>Department : {employeeDetail.departement}</h6>
                    <h6>Role : {employeeDetail.position}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center mt-4 mb-3">
            Calendar
            <button onClick={this.handeleShowMore} className="btn btn-primary">
              {!this.state.showMore ? "Show More" : "Show Less"}
            </button>
          </h2>
          <div className="row">
            {!this.state.showMore
              ? calendarDate.map((item, index) => {
                  return (
                    <div key={index} className="col-md-3 ">
                      <Calendar value={item} />
                    </div>
                  );
                })
              : MoreCalendarDate.map((item, index) => {
                  return (
                    <div key={index} className="col-md-3 mb-2">
                      <Calendar value={item} />
                    </div>
                  );
                })}
          </div>
          <div className="d-flex justify-content-center  mt-4 mb-3  container">
            <h4>All Absences</h4>
          </div>
          <div className="row mb-5 py-3">
            <table class="table container table-sm ">
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
                  <td>2021-1-15 - 2021-1-25</td>
                  <td>Approved</td>
                  <td>
                    <button>
                      <i class="fas fa-trash-alt" />
                    </button>
                  </td>
                  <td>Kunle</td>
                </tr>
                <tr>
                  <td>Health</td>
                  <td>5</td>
                  <td>2019-3-22 - 2019-3-27</td>
                  <td>Pending</td>
                  <td>
                    <button>
                      <i class="fas fa-trash-alt" />
                    </button>
                  </td>
                  <td>Mayowa</td>
                </tr>
                <tr>
                  <td>Holiday</td>
                  <td>10</td>
                  <td>2019-4-5 - 2019-4-15</td>
                  <td>Pending</td>
                  <td>
                    <button>
                      <i class="fas fa-trash-alt" />
                    </button>
                  </td>
                  <td>Kunle</td>
                </tr>
                <tr>
                  <td>Time Off</td>
                  <td>14</td>
                  <td>2019-5-01 - 2019-5-15</td>
                  <td>Pending</td>
                  <td>
                    <button>
                      <i class="fas fa-trash-alt" />
                    </button>
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
