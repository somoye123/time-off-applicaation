import React, { Component } from "react";

const typeOfTimeOff = [
  { name: 'Vacation', days: 2 },
  { name: 'Maternity Leave', days: 10 },
  { name: 'Medical Checkup', days: 5 },
  { name: 'Marriage Purpose', days: 7 },
]

let date = new Date();
date = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`

export default class AbsenceForm extends Component {
  state = {
    startTime: date,
    stopTime: date,
    diffStartTimeStopTime: '0 Days',
    showError: false
  }

  handleStartTime = e => {
    let startTimeValue = e.target.value;
    this.setState({ startTime: startTimeValue })
    const start = startTimeValue.replace(/-/g, '');
    const stop = this.state.stopTime.replace(/-/g, '');
    const diff = stop - start
    this.setState({ diffStartTimeStopTime: `${diff} Days` })
    console.log(this.state.diffStartTimeStopTime)
  }

  handleStopTime = e => {
    let stopTimeValue = e.target.value;
    this.setState({ stopTime: stopTimeValue })
    const start = this.state.startTime.replace(/-/g, '');
    const stop = stopTimeValue.replace(/-/g, '');
    const diff = stop - start
    this.setState({ diffStartTimeStopTime: `${diff} Days` })
    console.log(diff)
  }

  hamdleFormSubmit = () => {
    if (!this.state.diffStartTimeStopTime.includes('-') && this.state.diffStartTimeStopTime !== '0 Days') {
      console.log(this.state.diffStartTimeStopTime)
      alert('saved wait for approval')
    } else {
      this.setState({ showError: true })
    }
    if (this.state.diffStartTimeStopTime === '0 Days') {
      this.setState({ showError: true })
    }
  }
  render() {
    return (
      <React.Fragment className="container absence mt-3 align-center ">
        <div className="card align-center">
          <div className="card-header text-center">
            <h5>Request For Leave</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1"><h6>Leave Type</h6></label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    {
                      typeOfTimeOff.map(item => {
                        return <option key={item.days}>{item.name}</option>
                      })
                    }

                  </select>
                </div>
              </div>
            </div>
            <h6>From:</h6>
            <div className="row">
              <div className="col-4">
                <select className="form-control">
                  <option>All day</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                </select>
              </div>
              <div className="col-8">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar" ></i></span>
                  </div>
                  <input type="date" min={date} value={this.state.startTime} onChange={this.handleStartTime}
                    className="form-control" />
                </div>
              </div>
            </div>
            <h6>To:</h6>
            <div className="row">

              <div className="col-4">
                <select className="form-control">
                  <option>All day</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                </select>
              </div>
              <div className="col-8">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar" ></i></span>
                  </div>
                  <input value={this.state.stopTime} onChange={this.handleStopTime} type="date"
                    min={this.state.startTime} className="form-control" />
                </div>
              </div>
            </div>
            <h6>Duration</h6>
            <div className="row">
              <div className="col-12">
                <input
                  value={this.state.diffStartTimeStopTime.includes('-') ? '0 Days' : this.state.diffStartTimeStopTime}
                  className="form-control" disabled />
                {
                  ((this.state.diffStartTimeStopTime === '0 Days' || this.state.diffStartTimeStopTime.includes('-'))
                    && this.state.showError) ?
                    <span className="text-danger">invalid duration must be more than 0 Days</span> : ''
                }
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label ><h6>Comment (Optional)</h6></label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button onClick={this.hamdleFormSubmit} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
