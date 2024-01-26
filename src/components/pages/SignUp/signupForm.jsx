import React from "react";
import "./style.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const signupForm = (props) => {
  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>SignUp</h1>
          <div className="input-box">
            <input type="text" placeholder="First-Name" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Last-Name" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm-Password" required />
            <FaLock className="icon" />
          </div>
          <button type="submit">Sign Up</button>
          <div className="register-link">
            <p>
              Already have an account?
              <Link to="#" onClick={() => props.onFormSwitch("LoginForm")}>
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default signupForm;
