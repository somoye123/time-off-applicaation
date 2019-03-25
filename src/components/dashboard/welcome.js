import React, { Component } from "react";
import Picture from "../../personal.jpg";
import "bootstrap/dist/css/bootstrap.css";
export default class welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col" />
            <div className="co-1 my-3">
              <img src={Picture} alt="user" height="100px" width="100px" />
            </div>
            <div className="col" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
