import React, { Component } from "react";
import Navbar from "../Navbars/AuthNavbar";
import { Link } from "react-router-dom";
import bereavement from "./images/bereavement-leave.jpg";
import holiday from "./images//holiday.jpg";
import emergency from "./images/emergencyChildCare.png";
import juryDuty from "./images/jury-duty.png";
import maternity from "./images/maternity.jpg";
import paternity from "./images/paternity.jpg";
import sabbatical from "./images/sabbatical.jpg";
import sick from "./images/sick.jpg";
import Footer from "../footer/footer";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="jumbotron jumbotron-fluid d-md-none">
          <div className="container">
            <h1 className="text-center">Time Off Management</h1>
            <p className="lead mt-lead">
              Let us help you keep full track of your leave period such as
              Vacation, Holiday, Sabbatical, Maternity, Paternity, Medicals.
            </p>
            <p className="text-center lead">
              <Link to="/SignUp">
                <button className="btn btn-success">Sign Up</button>
              </Link>
            </p>
          </div>
        </div>

        <div className="container mb-10 d-md-none">
          <h4 className="text-success text-center mb-5">
            Popular Reasons To Take Leave
          </h4>
          <div className="text-center">
            <div>
              <img
                alt="Sabbatical"
                className="d-block w-100"
                src={sabbatical}
              />
              <h5 className="my-3 text-center">Sabbatical</h5>
            </div>
            <div>
              <img alt="Holiday" className="d-block w-100" src={holiday} />
              <h5 className="my-3 text-center">Holiday</h5>
            </div>
            <div>
              <img alt="Sick" className="d-block w-100" src={sick} />
              <h5 className="my-3 text-center">Medicals</h5>
            </div>
            <div>
              <img
                alt="Bereavement"
                className="d-block w-100"
                src={bereavement}
              />
              <h5 className="my-3 text-center">Bereavement</h5>
            </div>
            <div>
              <img alt="Jury" className="d-block w-100" src={juryDuty} />
              <h5 className="my-3 text-center">Jury Duty</h5>
            </div>
            <div>
              <img alt="Paternity" className="d-block w-100" src={paternity} />
              <h5 className="my-3 text-center">Paternity</h5>
            </div>
            <div>
              <img alt="Maternity" className="d-block w-100" src={maternity} />
              <h5 className="my-3 text-center">Maternity</h5>
            </div>
            <div>
              <img alt="Emergency" className="d-block w-100" src={emergency} />
              <h5 className="mt-2 mb-3 text-center">Emergency Child  Care Leave</h5>
              <h5 className="text-center">.</h5>
            </div>
          </div>
        </div>

        <div
          id="carouselWithCaption"
          className="carousel slide carousel-fade d-none d-md-block"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="5000">
              <img
                src={sabbatical}
                alt="sabbatical"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sabbatical</h5>
                <p>
                  Paid professional leave for the purpose of pursuing
                  study/education related to the job.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={holiday}
                alt="holiday"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block text-danger">
                <h5>Holiday</h5>
                <p>
                  A paid holiday is time off from work for rest and recreation
                  on a publicly recognized holiday.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={sick}
                alt="sick"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sick</h5>
                <p>
                  Paid absence from work for medical care, personal illness or
                  injury, or the care of an ill member of the employee’s
                  immediate family. May overlap with FMLA, ADA, STD/LTD, Workers
                  Compensation.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={bereavement}
                alt="bereavement"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Bereavement</h5>
                <p>
                  Paid absence from work granted when a death occurs in an
                  employee’s immediate family. Immediate family members are the
                  employee’s spouse, parents, parents-in-law, sons-in-law,
                  daughters-in-law, grandparents, grandchildren, brothers,
                  sisters, children, and members of the same household.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={juryDuty}
                alt="juryDuty"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block text-success">
                <h5>Jury Duty</h5>
                <p>
                  An authorized absence from work that enables employees to
                  complete compulsory jury duty service in an established
                  federal or state court without sustaining a financial loss.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={paternity}
                alt="paternity"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Paternity</h5>
                <p>
                  Paid leave from work for fathers following the birth of their
                  child.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={maternity}
                alt="maternity"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block text-primary">
                <h5>Maternity</h5>
                <p>
                  Paid leave for a woman who is pregnant or has just given
                  birth.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={emergency}
                alt="emergency"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h5>Emergency Child Care Leave</h5>
                <p>
                  Paid leave granted for situations causing an employee’s
                  inability to report for or continue scheduled work because of
                  emergency child care requirements, such as the unexpected
                  absence of the regular care provider, the unexpected closure
                  of the child’s school, or an unexpected need to pick up the
                  child at school earlier than normal.
                </p>
                {/* <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link> */}
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselWithCaption"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselWithCaption"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
