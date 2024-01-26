import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";
import { MdAssignmentAdd } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaLayerGroup } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FaBookAtlas } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import styled from 'styled-components';


const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/courses",
    name: "Courses",
    icon: <FaLayerGroup />,
    subRoutes: [
      {
        path: "/courses/dsa",
        name: "DSA",
        icon: <FaBookDead />,
      },
      {
        path: "/courses/oop",
        name: "OOP",
        icon: <FaBookJournalWhills />,
      },
      {
        path: "/courses/cn",
        name: "CN",
        icon: <FaBookAtlas />,
      },
    ],
  },
  {
    path: "/addcourses",
    name: "Add Courses",
    icon: <MdAssignmentAdd />,
  },
  {
    path: "/editcourses",
    name: "Edit Courses",
    icon: <RiFileEditFill />,
  },
  {
    path: "/deletecourses",
    name: "Delete Courses",
    icon: <RiDeleteBin5Fill />,
  },
  
  
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    // exact: true,
    // subRoutes: [
      //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
    //   {
      //     path: "/settings/2fa",
      //     name: "2FA",
      //     icon: <FaLock />,
      //   },
      //   {
        //     path: "/settings/billing",
        //     name: "Billing",
        //     icon: <FaMoneyBill />,
        //   },
    // ],
  },
  
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
    exact: true,
    subRoutes: [
      {
        path: "/users/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/users/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  }
];

const SideBar  = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

const overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 199; `

  const SidebarWrapper = styled.div`
  @media screen and (max-width:400px){
    &:hover{
      color: red;
    }
  }`

  return (
    <>
      <SidebarWrapper className="main-container">
      {isOpen && <overlay onClick={toggle} />}
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `} 
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  LMS 
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;
