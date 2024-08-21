import React from 'react'
import "./AboutUs.css";
import Header from '../Layout/Header';


export default function AboutUs() {
    return (
        <>
            <Header></Header>
            <div className='aboutus-body' style={{marginTop:"5rem"}}>

                {/* <!-- about section --> */}

                <section class="about_section layout_padding">
                    <div class="container  ">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="img-box">
                                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-5015545-4185620.png   " alt="vvvv" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-box">
                                    <div class="heading_container">
                                        <h2>
                                            About <span>Us</span>
                                        </h2>
                                    </div>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                        in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                        are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                        the middle of text. All
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end about section --> */}

                {/* <!-- footer section --> */}
                <footer class="footer_section mt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-3 footer_col">
                                <div class="footer_contact">
                                    <h4>
                                        Reach at..
                                    </h4>
                                    <div class="contact_link_box">
                                        <a href="">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            <span>
                                                Location
                                            </span>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                            <span>
                                                Call +01 1234567890
                                            </span>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <span>
                                                demo@gmail.com
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="footer_social">
                                    <a href="">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 footer_col">
                                <div class="footer_detail">
                                    <h4>
                                        About
                                    </h4>
                                    <p>
                                        Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis minima veniam corporis laudantium alias tenetur eveniet illum reprehenderit fugit a delectus officiis blanditiis ea.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-2 mx-auto footer_col">
                                <div class="footer_link_box">
                                    <h4>
                                        Links
                                    </h4>
                                    <div class="footer_links">
                                        <a class="" href="index.html">
                                            Home
                                        </a>
                                        <a class="active" href="about.html">
                                            About
                                        </a>
                                        <a class="" href="departments.html">
                                            Departments
                                        </a>
                                        <a class="" href="doctors.html">
                                            Doctors
                                        </a>
                                        <a class="" href="contact.html">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 footer_col ">
                                <h4>
                                    Newsletter
                                </h4>
                                <form action="#">
                                    <input type="email" placeholder="Enter email" />
                                    <button type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="footer-info">
                            <p>
                                &copy; <span id="displayYear"></span> All Rights Reserved By
                                <a href="https://html.design/">Free Html Templates<br /><br /></a>
                                &copy; <span id="displayYear"></span> Distributed By
                                <a href="https://themewagon.com/">ThemeWagon</a>
                            </p>
                        </div>

                    </div>
                </footer>

            </div>
            </>
            )
      
       
}
