import React, { Component } from "react";
import Calendar from 'react-calendar';

const username = 'Somoye Ayotunde';

const timeOffType = [
    {name: 'Vacation', days: 2},
    {name: 'Maternity Leave', days: 10},
    {name: 'Medical Checkup', days: 5},
    {name: 'Marriage Purpose', days: 7},
]

const employeeDetail = {name: 'Somoye Ayotunde', departement: 'Information Technology', position: 'Full Stacker'};

const requests = [
    {name: 'Medical Checkup', date: '12/03/2019'},
    {name: 'Maternity Leave', date: '23/02/2019'},
    {name: 'Vacation', date: '14/01/2019'},
]

const allAbsence = [
{type: 'Vacation', days: 3, startDate: '01/02/2019', stopDate: '04/02/2019', approvalBy: 'James Bond', status: 'Approved'},
{type: 'Attend Meetup', days: 5, startDate: '11/03/2019', stopDate: '16/03/2019', approvalBy: 'Thomas Edison', status: 'Approved'},
{type: 'Christmas Break', days: 4, startDate: '23/03/2018', stopDate: '27/02/2018', approvalBy: 'Mayowa', status: 'Approved'}
]

const calendarDate = [
    new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11)
]

const MoreCalendarDate = [
    new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11),
    new Date(2019 , 4, 2), new Date(2019, 5, 13), new Date(2018, 6, 25), new Date(2019, 7, 21),
    new Date(2019 , 8, 16), new Date(2019, 9, 8), new Date(2018, 10, 30), new Date(2019, 11, 24)
]






export default class EmployeeDashboard extends Component {
  state = {
      showMore: false,
      showMoreText: 'Show More'
  }

  handeleShowMore = () => {
       this.setState({
           showMore: !this.state.showMore,
           showMoreText: 'Show Less'
       })
   }
  render() {
    return(
      <React.Fragment>
    <div  className="ml-3 mt-3">
    <h3>Employee Dashboard</h3>
    <h5>{username}</h5>
    </div>
    
                    <div className="container">
                        <h3 className="text-center">Statistics</h3>
                        <div className="row p mt-5">
                            <div className="col-md-3 ">
                            <div className="card">
                                <div className="card-header bg-primary text-light">Days Remaining</div>
                                <div className="card-body">
                                    <h1>10 Days</h1>
                                    <h6>Out Of 20 Working Days</h6>
                                </div> 
                            </div>
                            </div>

                        <div className="col-md-3 ">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Types Of TimeOff</div>
                            <div className="card-body">
                            <ul className="list-group"> 
                                {
                                timeOffType.map((item , index) => {
                                        return <div key={index}>
                                            <li  className="list-group-item"> {item.name} 
                                                <span className="badge badge-primary float-right ">{item.days}</span></li>
                                            </div>
                                })
                                }
                            </ul>
                            </div> 
                        </div>
                      </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Available Request</div>
                            <div className="card-bod">
                            <ul className="list-group"> 
                                {
                                requests.map(item => {
                                        return <div key={item.date}>
                                            <li className="list-group-item"> {item.name} 
                                                <span className="badge badge-primary float-right ">{item.date}</span></li>
                                            </div>
                                })
                                }
                            </ul>
                            </div> 
                        </div>
                      </div>

                      <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Profile</div>
                            <div className="card-body text-center ">
                                <i className="fa fa-user-circle-o fa-3x "></i>
                                <div className="mt-2">
                                    <h6>Name: {employeeDetail.name}</h6>
                                    <h6>Department: {employeeDetail.departement}</h6>
                                    <h6>Position: {employeeDetail.position}</h6>
                                </div>
                            </div> 
                        </div>
                        </div>
                    </div>
                    <h2 className="text-center mt-4 mb-3 ">
                    Calendar  <button onClick={this.handeleShowMore} className="btn btn-primary">{
                        !this.state.showMore ? 'Show More' : 'Show Less'
                    }</button> </h2>
                    <div className="row">
                   
                    { !this.state.showMore ?
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
                </div>
      </React.Fragment>
    )
  }
}
               
