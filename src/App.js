import "./App.css";
import React, { useState } from "react";
import LoginForm from "./Components/Authentication/loginForm";
import SignupForm from "./Components/Authentication/signupForm";
import Sidebar from "./Components/Sidebar/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ForgotPassword from "./Components/Authentication/forgotPassword";
import Courses from "./Components/Courses/courses";
// import AuthDetails from "./Components/Authentication/authDetails";
import Home from "./Components/Home/home";
function App() {
  const [currentForm, setCurrentForm] = useState("LoginForm");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              currentForm === "LoginForm" ? (
                <LoginForm onFormSwitch={toggleForm} />
              ) : (
                <SignupForm onFormSwitch={toggleForm} />
              )
            }
          />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Courses" element={<Courses />} />
          {/* <Route path="/AuthDetails" element={<AuthDetails />} /> */}
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
