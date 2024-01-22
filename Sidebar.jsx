import React ,{useState}from 'react';
import {
    FaBars,
    FaCommentAlt,
    FaShoppingBag,
    FaTh,
    FaThList,
    FaRegChartBar,
    FaUserAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) =>{
    const[isOpen ,setIsOpen]=useState(false);
    const toggle =()=> setIsOpen(!isOpen);

    const menuItem =[
        {
            path: "/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path: "/about",
            name:"About",
            icon: <FaUserAlt/>
            
        },
        {
            path: "/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
    
        {
            path: "/comment",
            name:"Comment",
            icon: <FaCommentAlt/>
        },
    
        {
            path: "/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path: "/productList",
            name:"Product List",
            icon:<FaThList/>
        },
    ]
    return (
        <div className="container">
          <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
            <div className="top_section">
              <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                Logo
              </h1>
              <div
                style={{ marginLeft: isOpen ? "50px" : "0px" }}
                className="bars"
              >
                <FaBars onClick={toggle} />
              </div>
            </div>
    
            {menuItem.map((item, index) => (
              <div key={index}>
                {item.submenus ? (
                  <div className="submenu">
                    <div className="link" onClick={() => setIsOpen(!isOpen)}>
                      <div className="icon">{item.icon}</div>
                      <div
                        style={{ display: isOpen ? "block" : "none" }}
                        className="link_text"
                      >
                        {item.name}
                      </div>
                    </div>
                    <div style={{ display: isOpen ? "block" : "none" }}>
                      {item.submenus.map((submenu, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={submenu.path}
                          className="link"
                          activeClassName="active"
                        >
                          <div className="icon"></div>
                          <div className="link_text">{submenu.name}</div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{item.icon}</div>
                    <div
                      style={{ display: isOpen ? "block" : "none" }}
                      className="link_text"
                    >
                      {item.name}
                    </div>
                  </NavLink>
                )}
              </div>
            ))}
          </div>
          <main>{children}</main>
        </div>
      );
    };
    
    export default Sidebar;