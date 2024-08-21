import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import './JobDetails.css';
import Header from "../Layout/Header";
import moment from "moment";
import toast from "react-hot-toast";
import { GoLocation } from "react-icons/go";
import { MdCurrencyRupee, MdRefresh } from "react-icons/md";



const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();
  const [jobs, setJobs] = useState([]);


  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
        console.log(error)
      });
  }, []);

  useEffect(() => {
    try {
      axios.get("http://localhost:4000/api/v1/job/getallJobs", {
        withCredentials: true,
      })
        .then((res) => {
          setJobs(res.data.jobs);
          console.log(res.data.jobs);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, []);

  // function refreshPage(){ 
  //   window.location.reload(); 
  // }

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <>
      <div className="Job_detail_body">
        <Header></Header>
        <div className='container mx-auto'>
          <div className='w-100 d-flex flex-column flex-md-row gap-5' style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
            {/* LEFT SIDE */}
            <div className='left_Side_jobDeatils_box '>
              <div className='w-100 d-flex align-items-center justify-content-between'>
                <div className='w-75  d-flex gap-2'>
                  <img
                    src={job.companyLogo}
                    alt="Company Logo"
                    className='w-25 h-25  rounded'
                  />

                  <div className='d-flex flex-column'>
                    <p className='fs-4 fw-bolder m-0' style={{ color: "black" }}>
                      {job?.jobTitle}
                    </p>

                    <span className='text-base' style={{ fontSize: "1rem", lineHeight: "1.5rem", color: "black", fontWeight: "400" }}>{job.country},{job.city}</span>

                    <span className='text-base' style={{ fontSize: "1rem", lineHeight: "1.5rem", color: "rgb(37 99 235)", fontWeight: "400" }}>
                      {job?.companyName}
                    </span>

                    <span className='text-' style={{ fontSize: "0.875rem", lineHeight: "1.25rem", color: "rgb(107 114 128)", fontWeight: "350" }}>
                      {moment(job.jobPostedOn).fromNow()}
                    </span>
                  </div>
                </div>

                <div className=''>
                  <AiOutlineSafetyCertificate className='text-' style={{ fontSize: "1.875rem", lineHeight: "2.25rem", color: "rgb(59 130 246)", fontWeight: "500" }} />
                </div>
              </div>

              <div className='w-100 d-flex flex-row gap-2 align-items-center justify-content-between my-5'>
                <div className='rounded ' style={{ backgroundColor: "#bdf4c8", width: "10rem", height: "4rem" }}>
                  <div className="d-flex flex-column align-items-center mt-2">
                    <span className='jobditails_second_info '>Salary</span>
                    <p className='jobditails_second_info_2'>
                      $ {job.salaryFrom}
                    </p>
                  </div>

                </div>

                <div className='rounded ' style={{ backgroundColor: "#bae5f4", width: "10rem", height: "4rem" }}>
                  <div className="d-flex flex-column align-items-center mt-2">
                    <span className='jobditails_second_info '>Job Type</span>
                    <p className='jobditails_second_info_2'>
                      {/* {job?.jobType} */}
                      Full Time
                    </p>
                  </div>
                </div>

                <div className='rounded ' style={{ backgroundColor: "#fed0ab", width: "10rem", height: "4rem" }}>
                  <div className="d-flex flex-column align-items-center ">
                    <span className='jobditails_second_info mt-2'>No. of Applicants</span>
                    <p className='jobditails_second_info_2'>
                      {job.length}4K
                    </p>
                  </div>
                </div>

                <div className='rounded ' style={{ backgroundColor: "#cecdff", width: "10rem", height: "4rem" }}>
                  <div className="d-flex flex-column align-items-center ">
                    <span className='jobditails_second_info mt-2'>No. of Vacancies</span>
                    <p className='jobditails_second_info_2'>
                      {/* {job?.vacancies} */}25
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-100 d-flex gap-4'>
                <button className="jodetails_3_button">Job Description</button>
                <button className="jodetails_3_button">Company</button>

                {/* <CustomButton
              onClick={() => setSelected("1")}
              title='Company'
              containerStyles={`w-full flex items-center justify-center  py-3 px-5 outline-none rounded-full text-sm ${
                selected === "1"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            /> */}
              </div>

              <div className='mt-5'>
                {/* {selected === "0" ? (
              <> */}
                <p className='jobdetail_4_5_header'>Job Decsription</p>

                <span className='text-base'>{job.description}</span>

                {job.description && (
                  <>
                    <p className='jobdetail_4_5_header mt-5'>Requirement</p>
                    <span className='text-base'>
                      {job.location}
                    </span>
                  </>
                )}
                {/* </>
            ) : (
              <> */}
                <div className='mb-6 flex flex-col'>
                  <p className='text-xl text-blue-600 font-semibold'>
                    {job.companyName}
                  </p>
                  <span className='text-base'>{job.country}</span>
                  {/* <span className='text-sm'>{job?.company?.email}</span> */}
                </div>

                <p className='text-xl font-semibold'>About Company</p>
                <span>{job.description}</span>
                {/* </>
            )} */}
              </div>

              <div className='w-100 mt-5'>
                <Link className="jodetails_3_button" to={`/application/${job._id}`}>Apply Now</Link>

                {/* <CustomButton
              title='Apply Now'
              containerStyles={`w-full flex items-center justify-center text-white bg-black py-3 px-5 outline-none rounded-full text-base`}
            /> */}
              </div>
            </div>

            {/* RIGHT SIDE */} 
            <div className='w-100'>
              <p className='jobditails_second_info_2'>Similar Job Post</p>
              <div className="w-100 d-flex flex-wrap gap-3">

                {jobs && jobs.slice(0, 6).map((element) => {
                  return (
                    <div key={element._id} className="middle-jobs-card px-3 py-4 ">
                      <Link to={`/job/${element._id}`} className='jobs-card-body'>
                        <div className='d-flex gap-3'>
                          <img className='companyLogo' src={element.companyLogo} alt="" />
                          <div>
                            <h6 style={{ fontSize: "1.2" }}>{element.jobTitle}</h6>
                            <span className='company-details-tags gap-1'><p style={{ fontSize: "0.9rem" }}><GoLocation /> {element.country},{element.city}</p></span>
                          </div>
                        </div>
                        <div className='py-4'>
                          <p className='company-description font-monospace"'>{element.description}</p>
                        </div>
                        <div className='d-flex item-center justify-between mt-5'>
                          <span className='salary-text'><MdCurrencyRupee />{element.salaryTo}k</span>
                          <span className='d-flex align-items-center'>{moment(element.jobPostedOn).fromNow()}</span>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
    
  );
};

export default JobDetails;
