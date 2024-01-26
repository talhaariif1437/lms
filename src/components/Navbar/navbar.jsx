import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../Authentication/signOut";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">Welcome to LMS</Link>
          <SignOut />
          {/* <button className="btn btn-outline-light" type="submit">
            Sign Out
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
