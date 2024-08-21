import React from 'react'
import './ContactUs.css';
import Header from '../Layout/Header'
import GoogleMapReact from 'google-map-react';

export default function ContactUs() {

    const defaultProps = {
        center: {
            lat: 21.1592002,
            lng: 72.8222963
        },
        zoom: 11
    };

    return (
        <>
            <Header />
            <section class="contact_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Get In Touch
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form_container contact-form">
                                <form action="">
                                    <div class="form-row">
                                        <div class="col-lg-6">
                                            <div>
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div>
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" class="message-box" placeholder="Message" />
                                    </div>
                                    <div class="btn_box">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="map_container">
                                <div class="map">
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "" }}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end contact section --> */}

            {/* <!-- footer section --> */}
            <footer class="footer_section">
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
                                    <a class="" href="about.html">
                                        About
                                    </a>
                                    <a class="" href="departments.html">
                                        Departments
                                    </a>
                                    <a class="" href="doctors.html">
                                        Doctors
                                    </a>
                                    <a class="active" href="contact.html">
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
        </>
    )
}
