import React, { useState } from "react";
import "./loginStyle.css";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Outlet, Link, useNavigate } from "react-router-dom"; // Use useNavigate
import { signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../FirebaseConfig/FirebaseConfig";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState("");
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
    if (rememberMe) {
      localStorage.setItem("userToken", "your-user-token");
    }
  };
  const handleCheckbox = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={logIn}>
          <h1>Login</h1>
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
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleCheckbox}
              />
              Remember me
            </label>
            <Link to={"/ForgotPassword"}>Forgot Password?</Link>
          </div>
          <button type="submit">Login</button>
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

export default LoginForm;
