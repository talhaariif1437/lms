import React from "react";
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";
import "./homeStyle.css";
const home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default home;
