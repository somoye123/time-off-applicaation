import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-dark fixed-bottom py-2 mt-2">
          <footer className="text-center">
            <h6 className="text-light">&copy; 2019, Somoye</h6>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
