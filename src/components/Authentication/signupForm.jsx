import React, { useState } from "react";
import "./signupStyle.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../FirebaseConfig/FirebaseConfig";

const SignupForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(database, email, password)
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
        <form onSubmit={signUp}>
          <h1>SignUp</h1>
          <div className="input-box">
            <input type="text" placeholder="Full-Name" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm-Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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

export default SignupForm;
