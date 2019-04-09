import React, { Component } from 'react';
import EmployeeHeader from "../Navbars/DashboardNavbar";
import Footer from "../footer/footer";

export default class TeamViewDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <EmployeeHeader/>
        <div className="container">
          <h5 className="text-danger text-center my-4">TimeOff Yet To Be Approved</h5>
          <table className="container table">
            <thead>
              <tr>
                <th scope="col">Employee</th>
                <th scope="col">Department</th>
                <th scope="col">Request Date</th>
                <th scope="col">Leave Period</th>
                <th scope="col">Type</th>
                <th scope="col">Number Of Days</th>
                <th scope="col">Available Days</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Somoye Ayotunde</td>
                <td>Engineering</td>
                <td>2019/3/28</td>
                <td>2020/1/14 To 2020/2/14</td>
                <td>Sabbatical</td>
                <td>30</td>
                <td>28</td>
                <td><button type="button" class="btn btn-danger">Reject</button></td>
                <td><button type="button" class="btn btn-danger">Pending</button></td>
              </tr>
              <tr>
                <td>Kehinde Caroline</td>
                <td>HR</td>
                <td>2019/2/19</td>
                <td>2019/4/10 To 2019/4/24</td>
                <td>Vacation</td>
                <td>14</td>
                <td>7</td>
                <td><button type="button" class="btn btn-danger">Reject</button></td>
                <td><button type="button" class="btn btn-danger">Pending</button></td>
              </tr>
              <tr>
                <td>Somoye Opeyemi</td>
                <td>Finance</td>
                <td>2019/6/2</td>
                <td>2019/8/14 To 2019/8/17</td>
                <td>Marriage Purposes</td>
                <td>3</td>
                <td>2</td>
                <td><button type="button" class="btn btn-danger">Reject</button></td>
                <td><button type="button" class="btn btn-success">Approved</button></td>
              </tr>
            </tbody>
          </table>
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
        <Footer/>
      </React.Fragment>
    )
  }
}