import React from "react";
import axios from "axios";
import env from "../../../env";
import Navbar1 from "../../Navbars/AuthNavbar";

class ResetPassword extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.token);
  }
  async confirmToken(token) {
    try {
      token = this.props.match.params.token;
       await axios.post(`${env.api}/Reset-password`, { token });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <Navbar1 />
        <div className="jumbotron text-center bg-teal ">
          <h1>Reset Password </h1>
        </div>
        <form className="container">
          <div />
        </form>
      </div>
    );
  }
}
export default ResetPassword;
