import React, { useState,useContext } from "react";
import './PostJobs.css';
import Header from '../Layout/Header';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index"

export default function PostJobs() {

    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [salaryFrom, setSalaryFrom] = useState("");
    const [salaryTo, setSalaryTo] = useState("");

    const { isAuthorizedEmp, user } = useContext(Context);

    const handleJobPost = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/api/v1/job/postJob", {
            companyName,
            jobTitle,
            companyLogo,
            description,
            country,
            city,
            location,
            salaryFrom,
            salaryTo,
        },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => {
            toast.success(res.data.message);
            console.log(res);
        }).catch((err) => {
            toast.error(err.response.data.message);
            console.log(err);
            console.log(err.response.data)
        });
    };

    const navigateTo = useNavigate();
    if (!isAuthorizedEmp) {
        navigateTo("/");
    }


    return (
        <>
            <div className="postjob-body">
                <Header></Header>
                <div className='container' style={{ marginTop: "5rem" }}>
                    <div className="job_post page">
                        <div className="container">
                            <h3>POST NEW JOB</h3>
                            <form onSubmit={handleJobPost}>
                                <div className="postJob_wrapper">
                                    <input
                                        type="text"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        placeholder="Company Name"
                                    />
                                    {/* <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Graphics & Design">Graphics & Design</option>
                                        <option value="Mobile App Development">
                                            Mobile App Development
                                        </option>
                                        <option value="Frontend Web Development">
                                            Frontend Web Development
                                        </option>
                                        <option value="MERN Stack Development">
                                            MERN STACK Development
                                        </option>
                                        <option value="Account & Finance">Account & Finance</option>
                                        <option value="Artificial Intelligence">
                                            Artificial Intelligence
                                        </option>
                                        <option value="Video Animation">Video Animation</option>
                                        <option value="MEAN Stack Development">
                                            MEAN STACK Development
                                        </option>
                                        <option value="MEVN Stack Development">
                                            MEVN STACK Development
                                        </option>
                                        <option value="Data Entry Operator">Data Entry Operator</option>
                                    </select> */}
                                </div>
                                <div className="postJob_wrapper">
                                    <input
                                        type="text"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                        placeholder="Enter Job Title"
                                    />
                                    <input
                                        type="text"
                                        value={companyLogo}
                                        onChange={(e) => setCompanyLogo(e.target.value)}
                                        placeholder="Enter Company Logo URL"
                                    />
                                </div>
                                <div className="postJob_wrapper">
                                    <input
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        placeholder="Country"
                                    />
                                    <input
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="City"
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Location"
                                />
                                <div className="salary_wrapper">
                                   
                                            <div className="ranged_salary">
                                                <input
                                                    type="number"
                                                    placeholder="Salary From"
                                                    value={salaryFrom}
                                                    onChange={(e) => setSalaryFrom(e.target.value)}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder="Salary To"
                                                    value={salaryTo}
                                                    onChange={(e) => setSalaryTo(e.target.value)}
                                                />
                                            </div>
                                </div>
                                <textarea
                                    rows="10"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Job Description"
                                />
                                <button type="submit">Create Job</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
