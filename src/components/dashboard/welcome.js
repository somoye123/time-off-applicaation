import React, { Component } from "react";
import Picture from "../../personal.jpg";
import "bootstrap/dist/css/bootstrap.css";
export default class welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="img-center">
              <img src={Picture} alt="user" height="100px" width="100px"/>
            </div>
            <div class="w-100" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
