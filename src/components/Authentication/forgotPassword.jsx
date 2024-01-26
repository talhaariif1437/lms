import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { database } from "../FirebaseConfig/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const forgot = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(database, email)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={forgot}>
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdEmail className="icon" />
          </div>
          <button type="submit">Reset My Password</button>
        </form>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default ForgotPassword;
