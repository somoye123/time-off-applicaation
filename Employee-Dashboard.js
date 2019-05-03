import React , { Component } from 'react';
import Calendar from 'react-calendar';
import './employee.css';
import Header from './../../header/Header'
import axios from "axios";

// Render the Calendar

const typeOfTimeOff = [
    {name: 'Vacation', days: 2},
    {name: 'Maternity Leave', days: 10},
    {name: 'Medical Checkup', days: 5},
    {name: 'Marriage Purpose', days: 7},
    // {name: 'Attend Meetup', days: 3},
]

class EmployeeDashboard extends Component {
    state = {
        showMore: false,
        showMoreText: 'Show More',
        userInfo: '',
        allLeaveRequest: '',
        availableLeaveRequest: ''
    }
    convertToshorDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    getStatusColor(status) {
        switch (status) {
            case 'declined':
                return 'badge-danger'
            case 'approved': 
                return 'badge-success'
            default:
                return 'badge-warning'
        }
    }
    getAvailableRequest(requests) {
        if (requests) {
           const leave =  requests.filter(item => item.status === 'pending')
           this.setState({availableLeaveRequest: leave})
        }
    }
   async componentDidMount() {
        if (!localStorage.getItem('currentUserTimeOff')) {
            this.props.history.push('/login');
        } else {
            const token = JSON.parse(localStorage.getItem('currentUserTimeOff')).token;
            this.getUserProfile(token)
            this.getListOfLeaveRequest(token)
        }
    }
   async getUserProfile(token) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_TimeOffURL}/employee/profile`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            this.setState({userInfo: res.data.data})
            
        } catch (error) {
            this.props.history.push('/login');
            console.log(error);
        }
    }

   async getListOfLeaveRequest(token) {
        if (token) {
            axios.get(`${process.env.REACT_APP_TimeOffURL}/leave`, 
            {headers: { 'Authorization': `Bearer ${token}`}})
                .then((data) => {
                    const leaves = data.data.data
                    this.setState({allLeaveRequest: leaves})
                    this.getAvailableRequest(leaves)
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }

   handeleShowMore = () => {
        this.setState({
            showMore: !this.state.showMore,
            showMoreText: 'Show Less'
        })
    }
    render(){
        return(
            <div>
                <Header isLogin={true} />
     
                <div  className="ml-3 mt-3">
                <h3>Empolyee Dashboard</h3>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <img style={{width: '10%'}} src="https://image.flaticon.com/icons/svg/145/145850.svg" alt="avatar" />
                        <h5>{this.state.userInfo.firstName} {this.state.userInfo.lastName}</h5>
                        </div>
                    </div>
                    <h3 className="text-center">Statistics</h3>
                    <div className="row p mt-5 statistics">
                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Days Remaining</div>
                            <div className="card-body">
                                <h1>{this.state.userInfo.numberOfLeave} Days</h1>
                                <h6>Out Of 20 Working Days</h6>
                            </div> 
                        </div>
                        </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Types Of TimeOff</div>
                            <div className="card-bod">
                            <ul className="list-group"> 
                                {
                                typeOfTimeOff.map((item , index) => {
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
                            {
                                this.state.availableLeaveRequest && this.state.availableLeaveRequest.length ?
                                <ul className="list-group"> 
                                {
                                this.state.availableLeaveRequest.map((item, index) => {
                                        return <div key={index}>
                                            <li className="list-group-item"> {item.leave_type} 
                                                <span className="badge badge-primary float-right ">
                                                {this.convertToshorDate(item.date_created)}
                                                </span>
                                            </li>
                                            </div>
                                })
                                }
                            </ul> : <h6 className="mt-5 text-center">No Pending leave request</h6>
                            }
                   
                            </div> 
                        </div>
                      </div>
                    
                      <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Profile</div>
                            <div className="card-body text-center ">
                                <i className="fa fa-user-circle-o fa-3x "></i>
                                <div className="mt-2">
                                    <h6>Name: {this.state.userInfo.firstName} {this.state.userInfo.lastName}</h6>
                                    <h6>Department: {this.state.userInfo.department} </h6>
                                    <h6>Manager: {this.state.userInfo.manager}</h6>
                                </div>
                            </div> 
                        </div>
                        </div>

                    </div>
                    <h2 className="text-center mt-4 mb-3 ">
                    Calendar   </h2>
                    <div className="row align-content-center">
                   
                    { this.state.allLeaveRequest && this.state.allLeaveRequest.length ?
                        this.state.allLeaveRequest.map((item, index) => {
                            return <div key={index} className="col-md-3">
                            <Calendar 
                                value={new Date(item.from_date)}
                                />
                            </div>  
                        }) :
                        <h6>No Calendar</h6>
                      
                    }
      
                    </div>
                    <h3 className="text-center mt-3">All Absenses</h3>
                    <div className="row mb-5 py-3">
                        <div className="col-md-12 text-center">
                        {
                            !this.state.allLeaveRequest ? <div>
                                <h6>Loading <i className="fa fa-spinner"></i></h6>
                            </div> : 
                            <React.Fragment> 
                                {
                                    !this.state.allLeaveRequest.length ? 
                                    <h6>No  Available Leave Request</h6>  :
                                    <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Date Requested</th>
                                        <th>Leave Date</th>
                                        <th>Approved By</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                  
                                        {
                                            this.state.allLeaveRequest.map((item, index) => {
                                                return <tr key={index}>
                                                <td>{item.leave_type}</td>
                                                <td>{this.convertToshorDate(item.date_created)}</td>
                                                <td>{this.convertToshorDate(item.from_date)} - {this.convertToshorDate(item.to_date)}</td>
                                                <td>{item.approved_by ? item.approved_by : '--'}</td>
                                                <td> <span className={`badge ${this.getStatusColor(item.status)} text-light bgd`}>{item.status}</span> </td>
                                            </tr>
                                            })
                                        }
                           
                                    </tbody>
                            </table>
                                }
                           </React.Fragment>
                        }
                
                        </div>
                    </div>
               
                </div>


            </div>
        )
    }
}
export default EmployeeDashboard;