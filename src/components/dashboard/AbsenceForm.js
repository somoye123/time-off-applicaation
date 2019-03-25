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


















































// const allAbsence = [
//     { type: 'Vacation', days: 3, startDate: '01/02/2019', stopDate: '04/02/2019', approvalBy: 'James Bond', status: 'Approved' },
//     { type: 'Attend Meetup', days: 5, startDate: '11/03/2019', stopDate: '16/03/2019', approvalBy: 'Thomas Edison', status: 'Approved' },
//     { type: 'Christmas Break', days: 4, startDate: '23/03/2018', stopDate: '27/02/2018', approvalBy: 'Mayowa', status: 'Approved' }
// ]




<h2 className="text-center mt-4 mb-3 ">
  Calendar  <button onClick={this.handeleShowMore} className="btn btn-primary">{
    !this.state.showMore ? 'Show More' : 'Show Less'
  }</button> </h2>
  <div className="row">

    {!this.state.showMore ?
      calendarDate.map((item, index) => {
        return <div key={index} className="col-md-3 ">
          <Calendar
            value={item}
          />
        </div>
      }) : MoreCalendarDate.map((item, index) => {
        return <div key={index} className="col-md-3 mb-2">
          <Calendar
            value={item}
          />
        </div>
      })
    }
  </div>
  <h3 className="text-center mt-3">All Absenses</h3>
  <div className="row mb-5 py-3">
    <div className="col-12">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Type</th>
            <th>Number Of Days</th>
            <th>Date</th>
            <th>Approved By</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>

          {
            allAbsence.map((item, index) => {
              return <tr key={index}>
                <td>{item.type}</td>
                <td>{item.days}</td>
                <td>From: {item.startDate} To: {item.stopDate}</td>
                <td>{item.approvalBy}</td>
                <td>{item.status}</td>
              </tr>
            })
          }

        </tbody>
      </table>
    </div>
  </div>
                </div >


  <h2 className="text-center mt-4 mb-3 ">
    Calendar  <button onClick={this.handeleShowMore} className="btn btn-secondary">{
      !this.state.showMore ? 'Show More' : 'Show Less'
    }</button> </h2>
  <div className="row">

    {!this.state.showMore ?
      calendarDate.map((item, index) => {
        return <div key={index} className="col-md-3 ">
          <Calendar
            value={item}
          />
        </div>
      }) : MoreCalendarDate.map((item, index) => {
        return <div key={index} className="col-md-3 mb-2">
          <Calendar
            value={item}
          />
        </div>
      })
    }


  </div>

  <div>
    <div className="d-flex justify-content-center container">
      <p className="text-secondary">All Absences</p>
    </div>

    <div className="d-flex justify-content-center dashboard-absences mx-3">
      <table class="table container table-sm">
        <thead>
          <tr>

            <th scope="col">Types</th>
            <th scope="col">Duration</th>
            <th scope="col">Dates</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col">Approved By</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>Study leave</td>
            <td>10</td>
            <td>2021-1-15 - 2021-1-25</td>
            <td>Approved</td>
            <td><button><i class="fas fa-trash-alt"></i></button></td>
            <td>Kunle</td>
          </tr>

          <tr>
            <td>Health</td>
            <td>5</td>
            <td>2019-3-22 - 2019-3-27</td>
            <td>Pending</td>
            <td><button><i class="fas fa-trash-alt"></i></button></td>
            <td>Mayowa</td>
          </tr>

          <tr>
            <td>Holiday</td>
            <td>10</td>
            <td>2019-4-5 - 2019-4-15</td>
            <td>Pending</td>
            <td><button><i class="fas fa-trash-alt"></i></button></td>
            <td>Kunle</td>
          </tr>
          <tr>

            <td>Time Off</td>
            <td>14</td>
            <td>2019-5-01 - 2019-5-15</td>
            <td>Pending</td>
            <td><button><i class="fas fa-trash-alt"></i></button></td>
            <td>Mayowa</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <Footer />
        </div >
    )
}
}