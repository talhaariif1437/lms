import React from "react";
import { MdEmail } from "react-icons/md";
// import axios from "axios";

const ForgotPassword = (props) => {
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: this.email,
  //   };
  //   axios
  //     .post("ForgotPassword", data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => this}
              required
            />
            <MdEmail className="icon" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default ForgotPassword;
