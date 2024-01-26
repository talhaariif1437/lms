import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from "../FirebaseConfig/FirebaseConfig";

const SignOut = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(database)
      .then(() => {
        setSuccessMessage("User signed out successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <button className="btn btn-outline-light" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
