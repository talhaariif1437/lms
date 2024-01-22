import React from "react";
import "./style.css";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const loginForm = (props) => {
  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to={"/ForgotPassword"}>Forgot Password?</Link>
          </div>
          <button type="submit" Link to={"/Sidebar"}>
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?
              <Link to="#" onClick={() => props.onFormSwitch("Sign Up")}>
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default loginForm;
