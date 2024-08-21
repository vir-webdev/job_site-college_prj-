import React, { useContext, useEffect, useState } from "react";
import { FaHome, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import './Header.css';
import { Context } from "../../index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
export default function Header(props) {


  const [show, setShow] = useState(false);
  const { isAuthorized,
    setIsAuthorized,
    user,
    setUser,
    isAuthorizedEmp,
    setIsAuthorizedEmp,
    employer,
    setEmployer,
    isAuthorizedAdmin,
    setIsAuthorizedAdmin,
    admin,
    setAdmin, } = useContext(Context);
  const navigateTo = useNavigate();
  // console.log("header" + isAuthorized)
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/logout", { withCredentials: true, });
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  const handleLogoutEmp = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/employer/empLogout", { withCredentials: true, });
      toast.success(response.data.message);
      setIsAuthorizedEmp(false);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorizedEmp(true);
    }
  };






  return (
    <>
      <div className='container-grid Header-body'>
        <div className='container'>
          <div className='row mainHome-nav'>
            <div className='col-6 mainHome-logo'>
              <div className='mainHome-logo-icon'>
                <i className="fa-solid fa-circle first-i" style={{ color: "rgb(171 255 230)" }}></i>
                <i className="fa-solid fa-circle second-i" style={{ color: "rgb(4 241 55)" }}></i>
              </div>
              <span><h1 className='mainHome-logo-name'>jobi</h1></span>
              <input className="mainHome-search-box" type="text" placeholder="Search" />
            </div>
            <div className='col-5'>
              <div className='menu-link'>
                <ul>
                  <li>
                    <Link to="/Home" className='menu'>
                      <div className='menu-icon'> <FaHome size={24} /> </div>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    {isAuthorized ?
                      <Link to="/Job/getall" className='menu'>
                        <div className='menu-icon'> <MdScreenSearchDesktop size={24} /> </div>
                        <span>Jobs</span>
                      </Link> :
                      <Link to="/PostJobs" className='menu'>
                        <div className='menu-icon'> <MdScreenSearchDesktop size={24} /> </div>
                        <span>PostJobs</span>
                      </Link>
                    }
                  </li>
                  <li>
                    {isAuthorized ?
                      <Link to="/" className='menu'>
                        <div className='menu-icon'> <HiBuildingOffice2 size={24} /> </div>
                        <span>Company</span>
                      </Link> :
                      <Link to="/MyJobs" className='menu'>
                        <div className='menu-icon'> <HiBuildingOffice2 size={24} /> </div>
                        <span>MyJobs</span>
                      </Link>
                    }
                  </li>
                  <li>
                    <Link to="/AboutUs" className='menu'>
                      <div className='menu-icon'> <PiUsersThreeFill size={24} /> </div>
                      <span>About us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContactUs" className='menu'>
                      <div className='menu-icon'> <PiUsersThreeFill size={24} /> </div>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                  <li>
                    {/* <Link to="/applications/me" className='menu'> */}
                    <Link to="/Notification" className='menu'>
                      <div className='menu-icon'> <IoMdNotifications size={24} /></div>
                      <span>Notifications</span>
                      <div className="notification-alert">3</div>
                    </Link>
                  </li>
                  <li>
                  <Link to="/Profile" className='menu'>
                      <div className='menu-icon'> <FaUserCircle size={24} color='rgb(4, 241, 55)' /> </div>
                      <span>Me<FaCaretDown size={15} /></span>
                      </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-1'>
              {isAuthorized ?
                <button className='mainHome-logout-btn' onClick={handleLogout}>
                  Logout
                </button> :
                <button className='mainHome-logout-btn' onClick={handleLogoutEmp}>
                  Logout
                </button>
              }


            </div>
          </div>
        </div>
      </div>

    </>
  )
}
