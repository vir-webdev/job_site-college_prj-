import React, { useEffect, useState } from 'react'
import './Job.css';
import Header from '../Layout/Header';
import { CiSearch, CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";




export default function Job() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, SetCurrentPage] = useState(1);
    const itemPerPage = 8; // Number of items per page
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    // convert date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

    // ---------------------- Fetching jobs data from json file
    useEffect(() => {
        setIsLoading(true);
        console.log()
        try {
            axios.get("http://localhost:4000/api/v1/job/getallJobs", {
                withCredentials: true,
            })
                .then((res) => {
                    setJobs(res.data.jobs);
                    setIsLoading(false);
                    console.log(res.data.jobs);
                });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }, []);

    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value);
        console.log(event.target.value);
    }

    const [queryLoction, setQueryLocation] = useState("");
    const handleInputChangeLocation = (event) => {
        setQueryLocation(event.target.value);
        console.log(event.target.value);
    }
    // ------------------------filtered by search title
    // const jobdata = JSON.stringify(jobs.jobs).toString();
    // console.log("kunal data"  + jobdata);
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    const filteredItemsLoction = jobs.filter((job) => job.city.toLowerCase().indexOf(queryLoction.toLowerCase()) !== -1);


    //-------------------------radio filtering ----------------------
    const radioChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    //-------------------------Button based filtering ----------------------
    const buttonBasedChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    //-------------------------calculate the index range--------------------
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        return { startIndex, endIndex };
    }

    //-------------------------function for the next Page--------------------
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemPerPage)) {
            SetCurrentPage(currentPage + 1);
        }
    }
    //-------------------------function for the Previous page--------------------
    const previousPage = () => {
        if (currentPage > 1) {
            SetCurrentPage(currentPage - 1);
        }
    }

    //--------------------main Fuction ---------------------
    const filteredData = (jobdata, selected, query, queryLoction) => {
        let filteredJobs = jobdata;
        if (query) {
            filteredJobs = filteredItems;
        }
        if (queryLoction) {
            filteredJobs = filteredItemsLoction;
        }

        //category filtered
        if (selected) {
            filteredJobs = filteredJobs.filter(({ country, salaryTo, city, jobPostedOn }) => (
                country === selected ||
                parseInt(salaryTo) <= parseInt(selected) ||
                city === selected ||
                jobPostedOn >= selected
            ));
            console.log(filteredJobs);
        }


        const { startIndex, endIndex } = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex);
        return filteredJobs

    }
    const result = filteredData(jobs, selectedCategory, query, queryLoction);

    return (
        <>
            <div className='job-body' style={{ backgroundColor: "#F3F6F9" }}>
                <Header></Header>

                <div className='container'>
                    <div className='search-banner'>
                        <div className='search-banner-heading'>
                            <h1>Find your new job today</h1>
                            <p style={{ color: "rgb(159 159 159)" }}>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
                        </div>

                        <form>
                            <div className='row'>
                                <div className='col-6 pe-0'>
                                    <div className='job-search-bar'>
                                        <CiSearch className='job-search-bar-icon'></CiSearch>
                                        <input className='job-search-bar-input' style={{ borderRadius: '25px 0px 0px 25px' }}
                                            value={query} onChange={handleInputChange} type="text" name='title' id='title' placeholder='What position are you looking for ?' />
                                    </div>
                                </div>
                                <div className='col-4 p-0'>
                                    <div className='job-search-bar'>
                                        <CiLocationOn className='job-search-bar-icon'></CiLocationOn>
                                        <input className='job-search-bar-input' type="text" name='title' id='title'
                                            value={queryLoction} onChange={handleInputChangeLocation} placeholder='Loction' />
                                    </div>
                                </div>
                                <div className='col-2 p-0'>
                                    <button type='submit' className='job-search-bar-btn' style={{ borderRadius: '0px 25px 25px 0px' }}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>


                    <main className="fitered-jobs-section ">
                        <div className="left-fitered">
                            <div className="left-fitered-1">
                                <div className='fitered-body p-3'>
                                    <h5>Filters</h5>
                                    <div className='filter-location mt-4'>
                                        <h6 style={{ color: "grey" }}>Location</h6>
                                        <div>
                                            <input type="radio" name='test' id='all' value="" onChange={radioChange} selected />
                                            <label htmlFor="all" className='ms-3 mb-2'>All</label><br />
                                            <input type="radio" name='test' id='london' value="london" onChange={radioChange} />
                                            <label htmlFor="london" className='ms-3 mb-2'>London</label><br />
                                            <input type="radio" name='test' id='suart' value="suart" onChange={radioChange} />
                                            <label htmlFor="suart" className='ms-3 mb-2'>suart</label><br />
                                            <input type="radio" name='test' id='madrid' value="madrid" onChange={radioChange} />
                                            <label htmlFor="madrid" className='ms-3 mb-2'>Madrid</label><br />
                                            <input type="radio" name='test' id='boston' value="boston" onChange={radioChange} />
                                            <label htmlFor="boston" className='ms-3 mb-2'>Boston</label><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position">
                                <div className="left-fitered-1">
                                    <div className='fitered-body p-3'>
                                        <div className='filter-salary'>
                                            <h6 style={{ color: "grey" }}>Salary</h6>
                                            <div className='mt-3 mb-4'>
                                                <button value="" onClick={buttonBasedChange} className='filter-salary-btn'>Hourly</button>
                                                <button value="Monthly" onClick={buttonBasedChange} className='filter-salary-btn'>Monthly</button>
                                                <button value="Yearly" onClick={buttonBasedChange} className='filter-salary-btn'>Yearly</button>
                                            </div>
                                            <div>
                                                <input type="radio" name='test2' id='all' value="" onChange={radioChange} selected />
                                                <label htmlFor="all" className='ms-3 mb-2'>All</label><br />
                                                <input type="radio" name='test2' id='30' value="30" onChange={radioChange} />
                                                <label htmlFor="30" className='ms-3 mb-2'> 	&lt; 30000k </label><br />
                                                <input type="radio" name='test2' id='50' value="50" onChange={radioChange} />
                                                <label htmlFor="50" className='ms-3 mb-2'>&lt; 50000k</label><br />
                                                <input type="radio" name='test2' id='80' value="80" onChange={radioChange} />
                                                <label htmlFor="80" className='ms-3 mb-2'>&lt; 80000k</label><br />
                                                <input type="radio" name='test2' id='100' value="100" onChange={radioChange} />
                                                <label htmlFor="100" className='ms-3 mb-2'>&lt; 100000k</label><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="left-fitered-1">
                                    <div className='fitered-body p-3'>
                                        <div className='filter-Date-of-posting'>
                                            <h6 style={{ color: "grey" }}>Date of posting</h6>
                                            <div className='mt-3'>
                                                <input type="radio" name='test3' id='all' value="" onChange={radioChange} selected />
                                                <label htmlFor="all" className='ms-3 mb-2'>All</label><br />
                                                <input type="radio" name='test3' id='24hours' value={twentyFourHoursAgoDate} onChange={radioChange} />
                                                <label htmlFor="24hours" className='ms-3 mb-2'>Last 24 hours</label><br />
                                                <input type="radio" name='test3' id='7days' value={sevenDaysAgoDate} onChange={radioChange} />
                                                <label htmlFor="7days" className='ms-3 mb-2'>Last 7 days</label><br />
                                                <input type="radio" name='test3' id='30days' value={thirtyDaysAgoDate} onChange={radioChange} />
                                                <label htmlFor="30days" className='ms-3 mb-2'>Last Month</label><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="middle-jobs w-100">

                            {isLoading ? (<p> Londing...... </p>) : result.length > 0
                                ? <>
                                    <div className="flex items-center justify-between mb-4">
                                        <h5>Shwoing: {result.length} Jobs Available</h5>
                                    </div>
                                    <div className="w-100 d-flex flex-wrap gap-3">
                                        {result && result.map((element) => {
                                            return (
                                                <div key={element._id} className="middle-jobs-card px-3 py-4 ">
                                                    <Link to={`/job/${element._id}`} className='jobs-card-body'>
                                                        <div className='d-flex gap-3'>
                                                            <img className='companyLogo' src={element.companyLogo} alt="" />
                                                            <div>
                                                                <h6 style={{fontSize:"1.2"}}>{element.jobTitle}</h6>
                                                                <span className='company-details-tags gap-1'><p style={{fontSize:"0.9rem"}}><GoLocation /> {element.country},{element.city}</p></span>
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

                                </>
                                : <>
                                    <div className="flex items-center justify-between mb-4">
                                        <h5>Shwoing: {result.length} Jobs Available</h5>
                                        <p>No data found!</p>
                                    </div>

                                </>
                            }

                            {/* pagination here */}
                            {
                                result.length > 0 ? (
                                    <div className="flex justify-center mt-4 space-x-8">
                                        <button onClick={previousPage}>Previous</button>
                                        <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemPerPage)}</span>
                                        <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemPerPage)}>
                                            Next</button>
                                    </div>
                                ) : ""
                            }
                        </div>


                    </main>
                </div>
            </div>
        </>
    )
}
