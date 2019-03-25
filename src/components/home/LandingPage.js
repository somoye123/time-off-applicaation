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
import vacation from "./images/vacation.jpg";
import violence from "./images/violence.jpg";
import Footer from "../footer/footer";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="jumbotron jumbotron-fluid d-md-none">
          <div className="container">
            <h1 className="text-center">Paid Leave</h1>
            <p className="lead">Let us help you keep full track of your leave period such as Vacation, Holiday. </p>
            <p className="text-center">
            <Link to="/SignUp">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
            </p>
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
                src={vacation}
                alt="vacation"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Vacation</h5>
                <p>
                  A paid, extended period of recreation and fun away from
                  work.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={holiday}
                alt="holiday"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Holiday</h5>
                <p>
                  A paid holiday is time off from work for rest and
                  recreation on a publicly recognized holiday.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={violence}
                alt="violence"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Violence</h5>
                <p>
                  Paid leave granted to victims of domestic violence, sexual
                  assault, and/or stalking in order that the employee might
                  obtain medical attention, counseling, relocation, legal
                  assistance and other victims services.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img src={sick} alt="sick" className="d-block w-100" height="600px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sick</h5>
                <p>
                  Paid absence from work for medical care, personal illness
                  or injury, or the care of an ill member of the employee’s
                  immediate family. May overlap with FMLA, ADA, STD/LTD,
                  Workers Compensation.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
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
                  employee’s immediate family. Immediate family members are
                  the employee’s spouse, parents, parents-in-law,
                  sons-in-law, daughters-in-law, grandparents,
                  grandchildren, brothers, sisters, children, and members of
                  the same household.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
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
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={juryDuty}
                alt="juryDuty"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Jury Duty</h5>
                <p>
                  An authorized absence from work that enables employees to
                  complete compulsory jury duty service in an established
                  federal or state court without sustaining a financial
                  loss.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
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
                  Paid leave from work for fathers following the birth of
                  their child.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={maternity}
                alt="maternity"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Maternity</h5>
                <p>
                  Paid leave for a woman who is pregnant or has just given
                  birth.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>

            <div className="carousel-item" data-interval="5000">
              <img
                src={emergency}
                alt="emergency"
                className="d-block w-100"
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Emergency Child Care Leave</h5>
                <p>
                  Paid leave granted for situations causing an employee’s
                  inability to report for or continue scheduled work because
                  of emergency child care requirements, such as the
                  unexpected absence of the regular care provider, the
                  unexpected closure of the child’s school, or an unexpected
                  need to pick up the child at school earlier than normal.
                </p>
                <Link to="/SignUp">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselWithCaption"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselWithCaption"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
