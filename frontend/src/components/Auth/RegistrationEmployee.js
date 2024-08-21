import React, { useState, useContext } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import img from '../../img/reg.jpg';
import './RegistrationEmployee.css';
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index"
export default function RegistrationEmployee() {
  // const [values, setvalues] = useState({
  //   username: "",
  //   email: "",
  //   password: ""
  // });
  // const hendleChange = (e) => {
  //   setvalues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const hendleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/user/register", { name, email, password },
        {
          headers: { "Content-Type": "application/json", },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };  
  if (isAuthorized) {
    return <Navigate to={'/Home'} />
  }

  return (
    <>
      {/* <div className="wrapper ">
        <div className="inner row">
          <div className="registra-image-holder col-6">
            <img src={img} alt="/" />
          </div>
          <form action="/" className="col-6 p-5">
            <h3>Registration Form</h3>
            <div className="form-wrapper">
              <input type="text" placeholder="Username" className="form-control" onChange={(e) => setName(e.target.value)} name="username" value={name} />
            </div>
            <div className="form-wrapper">
              <input type="text" placeholder="Email Address" className="form-control" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="" />
            </div>
            <button className='reg-button' style={{marginLeft:"6rem"}} onClick={hendleRegister}>  <span>submit</span></button>
            <p className="p-reg">---------- or--------- </p>

            <div className="google-btn">
              <GoogleOAuthProvider clientId="600248593848-0bclarknbtlln9uu8c62nbemrbauks78.apps.googleusercontent.com" >
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }} />
              </GoogleOAuthProvider>

            </div>

            <div className="sing_in_link">
              <a href="/">
                <Link to={"/LoginEmployee"}>sing in</Link>
              </a>
            </div>

          </form>
        </div>
      </div> */}

<div className="login-wrap">
				<div className="login-html">
					<div className="container" style={{height:"540px"}}>
						{/* <h2>
								jobi
								<span>
								<i className="fab fa-linkedin"></i>
								</span>
							</h2> 
						*/}
						<div className="text">
							<h1>Sign <span style={{paddingBottom:"5px"}}>up</span></h1>
							<p>Stay updated on your professional world</p>
						</div>
						<div className="your-input">
							<div className="input">
              <input type="text" placeholder="Username" className="form-control" 
              onChange={(e) => setName(e.target.value)} name="username" value={name} />
              </div>
							<div className="input">
              <input type="text" placeholder="Email Address" className="form-control" 
              onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
							</div>
              <div className="input">
              <input type="password" placeholder="Password" className="form-control" name="password" 
              onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="" />
							</div>
						</div>
						<a href="google,com" className="forgot-password-link" style={{marginBottom:"7px",marginTop:"-16px"}}>
							Forgot Password?
						</a>
						<button type="submit" className="js-login-sign-btn" onClick={hendleRegister}>
              <p className="text">
              Sign Up
              </p>
           </button>
            <p className="join-link">
            Have an account?
							<Link className="join-now" to={"/LoginEmployee"}>Log in Now</Link>
						</p>
					</div>
				</div>
			</div>
    </>
  
    

  )
}
