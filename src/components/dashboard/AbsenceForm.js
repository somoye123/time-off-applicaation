import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import env from "../../env";
import axios from "axios";
import EmployeeHeader from "../Navbars/DashboardNavbar";
import Footer from "../footer/footer";

const FillForm = "Fill out the form below";

const leaveType = [
  { name: 'Maternity Leave', days: 20 },
  { name: 'Health', days: 10 },
  { name: 'Marriage Purpose', days: 5 },
  { name: 'Travel', days: 7 },
  { name: 'Vacation', days: 5 },
  { name: 'Others', days: 5 },
]

let date = new Date();
date = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
export default class AbsenceForm extends Component {
  state = {
    user: "",
    fields: {},
    errors: {},
    leaveType: '',
    leaveReason: '',
    startTime: date,
    stopTime: date,
    diffStartTimeStopTime: '0 Days',
    showError: false
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem("employee-token");

      if (!token) return this.props.history.push("/Login");

      const res = await axios.get(`${env.api}/employee/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      this.setState({user: res.data.data });
    } catch (err) {
      if (localStorage.getItem("employee-token")) {
        localStorage.removeItem("employee-token");
      }
      this.props.history.push("/Login");
    }
  }

  handeleLeavetype = e => {
    console.log(e.target.value)
    this.setState({ leaveType: e.target.value })
  }

  handeleLeaveReason = e => {
    console.log(e.target.value)
    this.setState({ leaveReason: e.target.value })
  }

    handleStartTime = e => {
      let startTimeValue = e.target.value;
      this.setState({ startTime: startTimeValue })
      const start = startTimeValue.replace(/-/g, '');
      const stop = this.state.stopTime.replace(/-/g, '');
      let diff = start - stop
      diff = this.calculateDuration(diff)
      this.setState({ diffStartTimeStopTime: `${diff} Days` })
      console.log(this.state.diffStartTimeStopTime)
    }

  handleStopTime = e => {
    let stopTimeValue = e.target.value;
    this.setState({ stopTime: stopTimeValue })
    const start = this.state.startTime.replace(/-/g, '');
    const stop = stopTimeValue.replace(/-/g, '');
    let diff = stop - start
    diff = this.calculateDuration(diff)
    this.setState({ diffStartTimeStopTime: `${diff}` })
    console.log(diff)
  }
  
   handleFormSubmit = _ => {
    if (this.state.leaveType !== '' && this.state.leaveReason !== '' && !this.state.diffStartTimeStopTime.includes('-') && this.state.diffStartTimeStopTime !== '0 Days') {
      console.log(this.state.diffStartTimeStopTime)
      alert('Form submitted sucessfully, please await it approval')
    } else {
      this.setState({ showError: true })
    }

      const body = {
        leaveType: this.state.leaveType,
        startDate: this.state.startTime,
        stopDate: this.state.stopTime,
        duration: this.state.diffStartTimeStopTime,
        leaveReason: this.state.leaveReason,
        employee: this.state.user._id
      };
      
    axios.post(`${env.api}/leave`, body).then((data)=>{
        console.log(data);
        
      }).catch((error)=>{
        console.log(error);
        
      })

      this.setState({leaveType: '', startTime: date, stopTime: date, diffStartTimeStopTime: '0 Days',leaveReason: ''});
      
  }

  calculateDuration = (days) => {
    let not = undefined;
    let value = days
    let result = days
    let day, month, weeks
    if (value >= 30) {
      month = value / 30;
      month = Math.floor(month)
      value = value % 30
    } if (value >= 7) {
      day = value % 7;
      weeks = value / 7;
      weeks = Math.floor(weeks);
    } else {
      day = value
    }
    if (month !== not && (weeks === not && day === not)) {
      result = `${month} Month`
    }
    if ((month === not && day === 0) && weeks !== not) {
      result = `${weeks} Week`
    }
    console.log(day)
    if (day !== not && (month === not && weeks === not)) {
      result = `${day} day`
    }
    if (month !== not && weeks !== not && day !== not) {
      result = `${month} Month ${weeks} Week ${day} Day`
    }
    console.log(weeks)
    if (month !== not && weeks !== not && day === 0) {
      result = `${month} Month ${weeks} Week`
    }
    if (month !== not && weeks === not && day !== not) {
      result = `${month} Month ${day} Day`
    }
    if (month === not && weeks && day) {
      result = `${weeks} Week ${day} Day`
    }
    // result = `${month} Month ${weeks} Week ${day} Day`
    return result
  }

  render() {
    return (
    <React.Fragment>
      <EmployeeHeader />
      <div className="container mt-3 align-center">
        <div className="card align-center bg-success">
          <div className="card-header text-center">
            <h5>{FillForm}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <select name="" onClick={this.handeleLeavetype} id="exampleFormControlSelect1" className="form-control" required>
                    {
                      leaveType.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })
                    }
                  </select>
                  {
                   (this.state.leaveType=== '' && this.state.showError)
                   ?<small className="text-danger">Leave type is required</small>
                   :''
                  }
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="begin">Begin
                      <input type="date" id="begin" name="start" min={date} value={this.state.startTime} onChange={this.handleStartTime} required />
                    </label>
                  </div>
              </div>
              <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="end">To
                      <input type="date" name="end" value={this.state.stopTime} onChange={this.handleStopTime} min={this.state.startTime} id="end" required />
                    </label>
                  </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duration">
                    <input type="text" value={this.state.diffStartTimeStopTime.includes('-')
                      ? '0 Days'
                      : this.state.diffStartTimeStopTime} id="duration" name="duration" disabled/>
                  </label>
                  {
                    ((this.state.diffStartTimeStopTime === '0 Days' || this.state.diffStartTimeStopTime.includes('-')) && this.state.showError)
                    ? <small className="text-danger">Duration must be more than 0 Days</small>
                    : ''
                  }
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="reason"><h6>Reason for the time-off request</h6>
                      <textarea style={{width:"100%"}} name="comment" onChange={this.handeleLeaveReason} id="reason" rows="3" className="form-control" required></textarea>
                    </label>
                    {
                   (this.state.leaveReason === '' && this.state.showError)
                   ?<small className="text-danger">Precise comment about opting for the leave is required</small>
                   :''
                  }
                  </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button onClick={this.handleFormSubmit} className="my-1 btn btn-primary btn-lg">Submit Request</button>
          </div>
        </div>
      </div>   
      <Footer/>
    </React.Fragment>
    )
  }
}
