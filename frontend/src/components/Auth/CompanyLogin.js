import React, { useState,useContext } from "react";
import img from '../../img/Welcome Employers Register to Post Jobs.jpg'
import './CompanyLogin.css'
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index"

export default function CompanyLogin() {

  
  const [employerEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorizedEmp, setIsAuthorizedEmp, employer, setEmployer } = useContext(Context);

  const hendleEmployerLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/employer/empLogin", {
        employerEmail, 
        password
      },
        {
          headers: { "Content-Type": "application/json", },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success(data.message);
      setEmail(employerEmail);
      setPassword(password);
      setIsAuthorizedEmp(true);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
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
    <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img
              src={img}
              alt="/" />
          </div>
          <form action="/">
            <h3>LOgin</h3>

      
            <div class="form-wrapper">
               <input type="email" placeholder="contect person email" className="form-control" onChange={(e) => setEmail(e.target.value)}  value={employerEmail} />

               <input type="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}  value={password} />

            </div>
            
            <div className="form-wrapper">
             
            </div>
            {/* {errors.conpass && <p className='error'>{errors.conpass}</p>} */}
            <button className='reg-button'
             onClick={hendleEmployerLogin}
            ><span>submit</span></button>

            <div className="register_Link">
                <Link to="/CompanyRegistration">
                  <a href="/">Sign Up</a>
                </Link>
            </div>
          </form>
        </div>
      </div>

  )
}
