import React, { useContext, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from './index';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
// import WizardForm from './components/pages/WizardForm';
import HomeIntro from './components/Home/HomeIntro';
import Home from './components/Home/Home';
import LoginEmployee from './components/Auth/LoginEmployee';
import RegistrationEmployee from './components/Auth/RegistrationEmployee';
import Forgot from './components/pages/Forgot';
import CompanyLogin from './components/Auth/CompanyLogin';
import Job from './components/Job/Job';
import NotFound from "./components/NotFound/NotFound";
import CompanyRegistration from "./components/Auth/CompanyRegistration";
import PostJobs from "./components/Job/PostJobs";
import MyJobs from "./components/Job/MyJobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import AdminDashBoard from "./Admin/Pages/AdminDashBoard";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Profile from './components/pages/Profile';
import Notification from './components/pages/Notification';

function App() {
 const context = useContext(Context);
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/getuser", { withCredentials: true, });
        setUser(response.data.user);
        console.log(response.data.user)
        setIsAuthorized(true);
      } catch (error) {
        console.log(error)
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  const { isAuthorizedEmp, setIsAuthorizedEmp, setEmployer } = useContext(Context);
  useEffect(() => {
    const fetchEmployer = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/employer/getEmployer", { withCredentials: true, });
        setEmployer(response.data.employer);
        console.log(response.data.employer)
        setIsAuthorizedEmp(true);
      } catch (error) {
        setIsAuthorizedEmp(false);
      }
    };
    fetchEmployer();
  }, [isAuthorizedEmp]);




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/AdminDashBoard' element={<AdminDashBoard />}></Route>
          <Route path='/' element={<HomeIntro />}></Route>
          <Route path='/LoginEmployee' element={<LoginEmployee />}></Route>
          <Route path='/RegistrationEmployee' element={<RegistrationEmployee />}></Route>
          <Route path='/Forgot' element={<Forgot />}></Route>
          {/* <Route path='/WizardForm' element={<WizardForm />}></Route> */}
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/CompanyLogin' element={<CompanyLogin />}></Route>
          <Route path='/CompanyRegistration' element={<CompanyRegistration />}></Route>
          <Route path='/Job/getall' element={<Job />}></Route>
          <Route path='/PostJobs' element={<PostJobs />}></Route>
          <Route path='/MyJobs' element={<MyJobs />}></Route>
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path='/AboutUs' element={<AboutUs />}></Route>
          <Route path='/ContactUs' element={<ContactUs />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/Notification' element={<Notification />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App; 