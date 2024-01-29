import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddCourses from "./pages/Add Courses";
import EditCourses from "./pages/EditCourses";
import DeleteCourses from "./pages/DeleteCourses";
import Courses from "./pages/Courses";
import Order from "./pages/Order";
import Setting from "./pages/Setting";
import Users from "./pages/Users";
import DSA from "./pages/Courses/DSA";
import OOP from "./pages/Courses/OOP";
import CN from "./pages/Courses/CN";
import Billing from "./pages/Users/Billing";
import Profile from "./pages/Users/Profile";  



function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addcourses" element={<AddCourses />} />
          <Route path="/editcourses" element={<EditCourses />} />
          <Route path="/deletecourses" element={<DeleteCourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/order" element={<Order />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/users" element={<Users />} />
          <Route path="/courses/dsa" element={<DSA />} />
          <Route path="/courses/oop" element={<OOP />} />
          <Route path="/courses/cn" element={<CN />} />
          <Route path="/users/billing" element={<Billing />} />
          <Route path="/users/profile" element={<Profile />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
