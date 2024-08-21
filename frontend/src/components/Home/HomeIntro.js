import React from 'react'
import './HomeIntro.css';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
function HomeIntro() {
    return (
        <>
            {/* navbar */}
            <div className='container-fluid px-4 home'>
                <nav>
                    <div className="row mb-5 home-nav">
                        <div className='col-3 logo'>
                            <div className='logo-icon'>
                                <i className="fa-solid fa-circle first-i" style={{ color: "rgb(171 255 230)" }}></i>
                                <i className="fa-solid fa-circle second-i" style={{ color: "rgb(4 241 55)" }}></i>
                            </div>
                            <span><h2 className='logo-name'>jobi</h2></span>
                        </div>

                        <div className="col-6 home-menu-link">
                            <ul>
                                <li>
                                    <Link to="/">
                                    <a href="/" className='menu'>
                                        <span>Home</span>
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="/" className='menu'>
                                        <span>Jobs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className='menu'>
                                        <span>Company</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className='menu'>
                                        <span>About us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-3 d-flex justify-content-end home-nav-button '>
                            <div className='px-2 login-sign-box'>
                                <Link to="/LoginEmployee">
                                <button className='login-sign-btn'> Login/Sign up </button>
                                </Link>
                            </div>
                            <div className='post-job-box'>
                            <Link to="/CompanyLogin">
                                <button className='post-job-btn'>Post a job</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/*  main - block */}
                <section>
                    <div className='row home-banner mb-5'>
                        <div className='col-3 home-banner-left'>
                            <div className='row first-leftblock'>
                                <div className='col'><i className="fa-solid fa-circle" style={{ color: "#bec8cf" }}></i></div>
                                <div className='col text-center'> <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="@ab1111..." width={50} /></div>
                            </div>
                            <div className='row second-leftblock'>
                                <div className='col'><img className='mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU" alt="@ab2222......" width={78} /></div>
                                <div className='col'><img className='dimond-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKs4lhnZTL5Vh4JZFDUeMeLVpikfC6hzu6Zg&usqp=CAU" alt="@ab333....." width={50} /></div>
                            </div>
                            <div className='row third-leftblock'>
                                <div className='col text-center'><i className="fa-solid fa-circle" style={{ color: "#7ae1bf" }}></i></div>
                                <div className='col'><img className='girl-img' src="https://kidzartworx.com.au/wp-content/uploads/2017/01/sarah-circle-headshot-blur-background-BW.png.png" alt="@ab444......" width={60} /></div>
                            </div>
                        </div>
                        <div className='col-6 home-main-contain text-center'>
                            <div className='row home-main-title'>
                                <h1>Find & Hire</h1>
                            </div>
                            <div className='row home-main-title'>
                                <h1>Experts for any Job</h1>
                            </div>
                            <div className='row home-main-btn'>
                                <div className='col'>
                                    <Link to="/LoginEmployee">
                                    <a className="find-job-btn" href="/">
                                        <span className="top-key"></span>
                                        <span className="text">Find a Job</span>
                                        <span className="bottom-key-1"></span>
                                        <span className="bottom-key-2"></span>
                                    </a>
                                    </Link>
                                </div>
                                <div className='col'>
                                <Link to="/CompanyLogin">
                                    <a className="find-job-btn" href="/">
                                        <span className="top-key"></span>
                                        <span className="text">Hire a Employee</span>
                                        <span className="bottom-key-1"></span>
                                        <span className="bottom-key-2"></span>
                                    </a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className='col-3 home-banner-rigt'>
                            <div className='row first-rigtblock'>
                                <div className='col'> <img className='mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sO12kYIhmBgS-xlAxZuq5fA3TkubxG6aqA&usqp=CAU" alt="@ab1111..." width={40} /></div>
                                <div className='col text-center'><i className="fa-solid fa-circle" style={{ color: "#bec8cf" }}></i></div>
                            </div>
                            <div className='row second-rigtblock'>
                                <div className='col'><img className='drive-img' src="https://cdn-icons-png.flaticon.com/512/2913/2913963.png" alt="@ab333....." width={50} /></div>
                                <div className='col'><img className='man-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvT321d4yodwKrwnY4uUaAS5MwlPZAZjKScg&usqp=CAU" alt="@ab2222......" width={78} /></div>
                            </div>
                            <div className='row third-rigtblock'>
                                <div className='col text-center'><img src="https://kidzartworx.com.au/wp-content/uploads/2017/01/Rachel-headshot-circle.jpg" alt="@ab444......" width={60} /></div>
                                <div className='col text-center'><i className="fa-solid fa-circle" style={{ color: "#7ae1bf" }}></i></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/*  steps  */}
            <div className='container'>
                <hr className='horizantal-line' />

                <section className='step-section'>
                    <div className='row text-center mb-5 step-section-title'>
                        <h1>How it's Work</h1>
                    </div>
                    <div className='row step-section-contain'>
                        <div className='col'>
                            <div className='home-steps-section-body text-center'>
                                <div className='step-icon'> <i className="fa-sharp fa-solid fa-circle-user" style={{ color: "rgb(3, 219, 3)" }}></i></div>
                                <h5 className='step-title'>Create Account</h5>
                                <p className='step-description'>It's very easy to open an account and start your journey.</p>
                            </div>
                        </div>
                        <div className='col-1'>
                            <div className='step-arrow'>
                                <img className='arrow-img' src="https://static.thenounproject.com/png/546321-200.png" alt="arrow" width={120} height={70} />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home-steps-section-body text-center'>
                                <div className='step-icon'> <i className="fa-sharp fa-solid fa-circle-user" style={{ color: "rgb(3, 219, 3)" }}></i></div>
                                <h5 className='step-title'>Complete your profile</h5>
                                <p className='step-description'>Complete your profile with all te info to get attention of client.</p>
                            </div>
                        </div>
                        <div className='col-1'>
                            <div className='step-arrow'>
                                <img className='arrow-img' src="https://static.thenounproject.com/png/546321-200.png" alt="arrow" width={120} height={70} />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home-steps-section-body text-center'>

                                <div className='step-icon'><i className="fa-sharp fa-solid fa-circle-user" style={{ color: "rgb(3, 219, 3)" }}></i></div>
                                <h5 className='step-title'>Create Account</h5>
                                <p className='step-description'>It's very easy to open an account and start your journey.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className='horizantal-line' />

                <section className='home-why-choose-us'>
                    <div className='row'>
                        <div className='col-7'></div>
                        <div className='col-5'>
                            <div className='row why-choose-us-question'><h6>Why choose us?</h6></div>
                            <div className='row why-choose-us-answer'><h1>World of talent at your fingertips</h1></div>
                            <div className='row second-most-search'>
                                <div className='col-11'><h5>Seamless search</h5></div>
                                <div className='col-1'> <span><i className="fa-solid fa-angle-up"></i></span></div>
                            </div>
                            <div className='row second-most-answer'>
                                <p>It only take 5 minutes, set-up is smooth and simple, with fully customisable
                                    page design to reflect your brand.
                                </p>
                            </div>
                            <hr />
                            <div className='row second-most-search'>
                                <div className='col-11'><h5>Seamless search</h5></div>
                                <div className='col-1'> <span><i className="fa-solid fa-angle-down"></i></span></div>
                            </div>
                            <hr />
                            <div className='row mb-5 second-most-search'>
                                <div className='col-11'><h5>Seamless search</h5></div>
                                <div className='col-1'> <span><i className="fa-solid fa-angle-down"></i></span></div>
                            </div>

                            <div className='row'>
                                <button className='learn-more-btn'> Learn more </button>
                            </div>

                        </div>
                    </div>
                </section>
            </div>



            {/* top company  */}
            <section className='top-company-section'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-6'>
                            <h1>Top Company</h1>
                        </div>
                        <div className='col-6 top-company-section-link'>
                            <a href="/"> Explore More </a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3 mb-5'>
                            <div className="card text-center" >
                                <div className="card-body">
                                    <div className='company-logo py-3'> <img src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png" alt="..." width={65} /></div>
                                    <h5 className="card-title">Amazon</h5>
                                    <p className="card-text py-3">Ambience Corporate Office Tower-II, Gurugram, Haryana 122002</p>
                                    <button className='company-btn mb-3'> 5 open jobs </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 mb-5'>
                            <div className="card text-center" >
                                <div className="card-body">
                                    <div className='company-logo py-3'> <img src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png" alt="..." width={65} /></div>
                                    <h5 className="card-title">Amazon</h5>
                                    <p className="card-text py-3">Ambience Corporate Office Tower-II, Gurugram, Haryana 122002</p>
                                    <button className='company-btn mb-3'> 5 open jobs </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 mb-5'>
                            <div className="card text-center" >
                                <div className="card-body">
                                    <div className='company-logo py-3'> <img src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png" alt="..." width={65} /></div>
                                    <h5 className="card-title">Amazon</h5>
                                    <p className="card-text py-3">Ambience Corporate Office Tower-II, Gurugram, Haryana 122002</p>
                                    <button className='company-btn mb-3'> 5 open jobs </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 mb-5'>
                            <div className="card text-center" >
                                <div className="card-body">
                                    <div className='company-logo py-3'> <img src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png" alt="..." width={65} /></div>
                                    <h5 className="card-title">Amazon</h5>
                                    <p className="card-text py-3">Ambience Corporate Office Tower-II, Gurugram, Haryana 122002</p>
                                    <button className='company-btn mb-3'> 5 open jobs </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        <div className='mt-5'>
        <Footer></Footer>
        </div>
            
        </>
    )
}

export default HomeIntro
