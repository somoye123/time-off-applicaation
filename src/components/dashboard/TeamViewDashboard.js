import React, { Component } from "react";
import env from "../../env";
import axios from "axios";
import EmployeeHeader from "../Navbars/DashboardNavbar";
import Footer from "../footer/footer";

export default class TeamViewDashboard extends Component {
  state = {
    user: "",
    request: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const token = localStorage.getItem("employee-token");

      if (!token) return this.props.history.push("/Login");

      const profile = await axios.get(`${env.api}/employee/profile`, {
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
        user: profile.data.data,
        request: leave.data.data,
        loading: false
      });
      console.log(this.state.request);
      console.log(this.state.user);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { user, request } = this.state;
    return (
      <React.Fragment>
        <EmployeeHeader />
        <div className="container">
          <h5 className="text-danger text-center my-4">
            TimeOff Yet To Be Approved Or Declined
          </h5>
          {request.length === 0 ? (
            <h6>Request will Load Automatically If Any</h6>
          ) : (
            <table className="container table table-hover">
              <thead>
                <tr>
                  <th scope="col">Employee</th>
                  <th scope="col">Department</th>
                  <th scope="col">Leave Type</th>
                  <th scope="col">Leave Period</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Leave Reason</th>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {request.map((item, index) => (
                  <tr key={index}>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.department}</td>
                    <td>{item.leaveType}</td>
                    <td>{`${item.startDate} To ${item.stopDate}`}</td>
                    <td>{item.duration}</td>
                    <td>{item.leaveReason}</td>
                    <td>
                      <button className="btn btn-success mr-2">Approve</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Decline</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <h5 className="text-success text-center my-4">Approved Request</h5>
          <table className="container table mb-5 py-3">
            <thead>
              <tr>
                <th scope="col">Employee</th>
                <th scope="col">Type</th>
                <th scope="col">Deducted</th>
                <th scope="col">Date</th>
                <th scope="col">Approved By</th>
                <th scope="col">Remark</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Somoye Ayotunde</td>
                <td>Academics</td>
                <td>10 Days</td>
                <td>2021/1/15 To 2021/1/25</td>
                <td>Ireti</td>
                <td>Good</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Eja Nla</td>
                <td>Vacation</td>
                <td>7 Days</td>
                <td>2019/3/15 To 2019/3/21</td>
                <td>Mayowa</td>
                <td>Good</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Abioye Racheal</td>
                <td>Wedding Purpose</td>
                <td>14 Days</td>
                <td>2019/5/1 To 2019/5/14</td>
                <td>Kunle</td>
                <td>Good</td>
                <td>Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
