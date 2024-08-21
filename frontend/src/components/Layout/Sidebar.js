import React from 'react'
import './Sidebar.css';
import Header from './Header';
import { motion } from "framer-motion"
import { useState } from 'react';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Header toggle={toggle}></Header>
            <div className='main-container'>
                <motion.div animate={{ width: isOpen ? "350px" : "0px" }} className='sidebar'>
                    <div className='container-fluid'>
                        <div className="row user-info">
                            <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" className='mx-auto d-block' alt="profile immage" />
                            <div className='text-center mt-3'>
                                <h3>Patel Devang</h3>
                                <h5>web-Devloper</h5>

                            </div>
                        </div>
                        <div className="mt-4 sub-menu">
                            <a className="dropdown-item sub-menu-link" href="/">
                                <i className="fa-solid fa-circle-user"></i>
                                <p>Edit Profile</p>
                            </a>
                            <a className="dropdown-item sub-menu-link" href="/">
                                <i className="fa-sharp fa-regular fa-circle-question"></i>
                                <p>Help & Support</p>
                            </a>
                            <a className="dropdown-item sub-menu-link" href="/">
                                <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
                                <p>Logout</p>
                            </a>

                        </div>
                    </div>
                </motion.div>
            </div>



        </>
    );
};
export default Sidebar


