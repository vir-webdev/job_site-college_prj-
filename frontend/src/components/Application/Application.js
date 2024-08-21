import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../index";
import './Application.css';
import Header from "../Layout/Header";
const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [Department, setDepartment] = useState("");
  const [degree, setdegree] = useState("");
  const [academicStart, setAcademicStart] = useState("");
  const [academicEnd, setAcademicEnd] = useState("");
  const [resume, setResume] = useState(null);

  const [fileName, setFileName] = useState([]);

  function refreshPage() {
    window.location.reload();
  }


  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  // Function to handle file input changes
  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
    setFileName(resume);
  };

  const { id } = useParams();
  const handleApplication = async (e) => {
    console.log(name,
      email,
      coverLetter,
      phone,
      address,
      gender,
      dob,
      collegeName,
      Department,
      degree,
      academicStart,
      academicEnd,
      resume)
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("collegeName", collegeName);
    formData.append("Department", Department);
    formData.append("degree", degree);
    formData.append("academicStart", academicStart);
    formData.append("academicEnd", academicEnd);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setGender("");
      setDob("");
      setCollegeName("");
      setDepartment("");
      setdegree("");
      setAcademicStart("");
      setAcademicEnd("");
      toast.success(data.message);
      console.log(data);
      navigateTo("/job/getall");
      refreshPage();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error)
    }
  };

  if (!isAuthorized) {
    navigateTo("/");
  }


  const [currentPage, setCurrentPage] = useState(0);


  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Header></Header>
      <div className="appication-body">
        <div className="progress-container">
          <div
            className="progressbar-appliction"
            style={{ width: `${((currentPage + 1) / 3) * 100}%` }}
          ></div>
        </div>
        <form onSubmit={handleApplication} className="wizard-form" autoComplete="off">
          <fieldset style={{ display: currentPage === 0 ? 'block' : 'none' }}>
            <div className="form-container blue-white-theme" >

              <form >
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name" placeholder="Enter your name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email" placeholder="Enter your email" required />

                <label htmlFor="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your mobile number" required />

                <label htmlFor="address">Address:</label>
                <textarea id="address" value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address" placeholder="Enter your address" required />

                <label htmlFor="description">Description:</label>
                <textarea id="description" value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  name="description" placeholder="Enter a description" />

                <label htmlFor="gender">Gender:</label>
                <select value={gender}
                  onChange={(e) => setGender(e.target.value)} id="gender" name="gender" required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <label htmlFor="dob">Date of Birth:</label>
                <input value={dob}
                  onChange={(e) => setDob(e.target.value)} type="date" id="dob" name="dob" required />

              </form>
            </div>
            <div className="app-modal-footer">
              <button type="button" onClick={handleNext}>Next</button>
            </div>

          </fieldset>
          <fieldset style={{ display: currentPage === 1 ? 'block' : 'none' }}>

            <div class="form-container">
              <form>
                <label for="university">College Name:</label>
                <input type="text"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)} id="university" name="university" required />

                <label for="department">Department:</label>
                <input type="text"
                  value={Department}
                  onChange={(e) => setDepartment(e.target.value)} id="department" name="department" required />

                <label for="degree">degree:</label>
                <input type="text" value={degree}
                  onChange={(e) => setdegree(e.target.value)} id="degree" name="degree" required />

                <label for="enrollment-year">Academic Year:</label><br />
                <div className="d-flex gap-4">
                  <input type="number" value={academicStart}
                    onChange={(e) => setAcademicStart(e.target.value)} id="enrollment-year" name="enrollment-year" min="1900" max="2099" step="1" required />
                  <input type="number" value={academicEnd}
                    onChange={(e) => setAcademicEnd(e.target.value)} id="graduation-year" name="graduation-year" min="1900" max="2099" step="1" required />
                </div>

              </form>
            </div>
            <div className="app-modal-footer d-flex gap-4 ">
              <button type="button" onClick={handlePrevious}>Previous</button>
              <button type="button" onClick={handleNext}>Next</button>
            </div>

          </fieldset>
          <fieldset style={{ display: currentPage === 2 ? 'block' : 'none' }}>

            <div class="file-container-3step">
              <div className="p-5">
                <div class="fileuploader-header">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                    <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Browse File to upload!</p>
                </div>
                <label for="file" class="fileuploader-footer">
                  <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg>
                  <p>{fileName.name}</p>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2"></path> <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2"></path> </g></svg>
                </label>
                <input id="file" type="file" accept=".pdf, .jpg, .png"
                  onChange={handleFileChange} />
              </div>
            </div>

            <div className="app-modal-footer d-flex gap-4">
              <button type="button" onClick={handlePrevious}>Previous</button>
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>



      {/* 
      <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" style={{ backgroundColor: "#F3F6F9" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style={{ backgroundColor: "#F3F6F9" }}>


             
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default Application;
