import React, { useState, useContext } from "react";
import './LoginEmployee.css'
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index"
export default function LoginEmployee() {


	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigateTo = useNavigate();
	const { isAuthorized,
		setIsAuthorized,
		isAuthorizedEmp,
		setIsAuthorizedEmp,
		isAuthorizedAdmin,
		setIsAuthorizedAdmin, } = useContext(Context);

	// if (email == "Admin12@gmail.com" && password == "admin12@12") {
	// 	setIsAuthorized(true);
	// 	setIsAuthorizedEmp(true);
	// 	console.log("admin : " + " " + isAuthorized, isAuthorizedAdmin, isAuthorizedEmp)
	// 	navigateTo('/AdminDashBoard');
	// }


	const hendleLogin = async (e) => {

		if (email == "Admin12@gmail.com") {
			e.preventDefault();
			try {
				const { data } = await axios.post("http://localhost:4000/api/v1/admin/AdminLogin", { email, password },
					{
						headers: { "Content-Type": "application/json", },
						withCredentials: true,
					}
				);
				console.log(data);
				toast.success(data.message);
				setEmail("");
				setPassword("");
				setIsAuthorizedAdmin(true);
			} catch (error) {
				toast.error(error.response.data.message);
				console.log(error)
			}
		}
		else {
			e.preventDefault();
			try {
				const { data } = await axios.post("http://localhost:4000/api/v1/user/login", { email, password },
					{
						headers: { "Content-Type": "application/json", },
						withCredentials: true,
					}
				);
				console.log(data);
				toast.success(data.message);
				setEmail("");
				setPassword("");
				setIsAuthorized(true);
			} catch (error) {
				toast.error(error.response.data.message);
			}
		};
		
	};
	if (isAuthorizedAdmin) {
		console.log("admin : " + " " + isAuthorized, isAuthorizedAdmin, isAuthorizedEmp)
		navigateTo('/AdminDashBoard');
	}
	if (isAuthorized) {
		console.log("user : " + " " + isAuthorized, isAuthorizedAdmin, isAuthorizedEmp)
		navigateTo('/Home');
	}

	


	return (
		<>
			<div className="login-wrap">
				<div className="login-html">
					<div className="container">
						{/* <h2>
								jobi
								<span>
								<i className="fab fa-linkedin"></i>
								</span>
							</h2> 
						*/}
						<div className="text">
							<h1>Sign <span>in</span></h1>
						</div>
						<div className="your-input">
							<div className="input">
								<input type="text" placeholder="abcd@gmail.com"
									onChange={(e) => setEmail(e.target.value)} value={email} required />
							</div>
							<div className="input">
								<input type="password" placeholder="Password"
									onChange={(e) => setPassword(e.target.value)} value={password} required />

								<label htmlFor="password"></label>
							</div>
						</div>
						<a href="google,com" className="forgot-password-link">
							Forgot Password?
						</a>
						<button type="submit" className="js-login-sign-btn" onClick={hendleLogin}>
							<p className="text">Sign in</p>
						</button>
						<p className="join-link">
							New to jobi?
							<Link className="join-now" to={"/RegistrationEmployee"}>Join now</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
