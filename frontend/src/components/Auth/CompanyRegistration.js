import React, { useState, useContext } from "react";
import './CompanyRegistration.css';
import img from '../../img/Welcome Employers Register to Post Jobs.jpg'
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index"

export default function CompanyRegistration() {


  const [companyName, setcmpName] = useState("");
  const [employerName, setEmpName] = useState("");
  const [employerNumber, setempNumber] = useState("");
  const [employerEmail, setEmail] = useState("");
  const [gstNumber, setgst] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorizedEmp, setIsAuthorizedEmp, employer, setEmployer } = useContext(Context);


  const hendleEmployerRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/employer/empRegister", {
        companyName,
        employerName,
        employerNumber,
        employerEmail, 
        gstNumber, 
        password
      },
        {
          headers: { "Content-Type": "application/json", },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success(data.message);
      setcmpName(companyName);
      setEmpName(employerName);
      setempNumber(employerNumber);
      setEmail(employerEmail);
      setgst(gstNumber);
      setPassword(password);
      setIsAuthorizedEmp(true);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
        console.log("abcsfksd : "  + error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again." );
        console.log(error)
      }
    }
  };
  if (isAuthorizedEmp) {
    return <Navigate to={'/Home'} />
  }

  return (
    <>
      <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img
              src={img}
              alt="/" />
          </div>
          <form action="/">
            <h3>Registration</h3>

            <div className="form-wrapper">
              <input type="text" placeholder="company name" className="form-control"
                onChange={(e) => setcmpName(e.target.value)} value={companyName} />
            </div>
            <div className="form-wrapper">
              <input type="text" placeholder="contect person" className="form-control" 
              onChange={(e) => setEmpName(e.target.value)} value={employerName} />
              <input type="number" placeholder="contect number" className="form-control"
               onChange={(e) => setempNumber(e.target.value)} value={employerNumber} />
              <input type="email" placeholder="contect person email" className="form-control"
               onChange={(e) => setEmail(e.target.value)} value={employerEmail} />
              <input type="password" placeholder="password" className="form-control" 
              onChange={(e) => setPassword(e.target.value)} value={password}  autoComplete=""/>
              <label htmlFor="gst_number">GST Number:</label>
              <input type="text" id="gst_number" name="gst_number" placeholder="Enter GST Number"
                onChange={(e) => setgst(e.target.value)} value={gstNumber} />

            </div>

            <div className="form-wrapper">

            </div>
            {/* {errors.conpass && <p className='error'>{errors.conpass}</p>} */}
            <button className='reg-button' onClick={hendleEmployerRegister}>
              <span>Register</span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
