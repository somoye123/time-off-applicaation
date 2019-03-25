import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-primary fixed-bottom py-2">
          <footer className="text-center">
            <h6 className="ml-5">&copy; 2019, Somoye</h6>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
