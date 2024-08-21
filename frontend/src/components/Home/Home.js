import React from 'react'
import './Home.css';
import Header from '../Layout/Header';
import Photo from '../../img/icons/photo-svgrepo-com.svg'
import video from '../../img/icons/video-movie-play-svgrepo-com.svg'
import calendar from '../../img/icons/calendar-1-svgrepo-com.svg'
import { useState, useEffect } from 'react';
import axios from "axios";
import toast from "react-hot-toast"
import { Link, Navigate } from "react-router-dom";
import moment from "moment";

export default function Home() {
    const [textInfo, setTextInfo] = useState(null);
    const [projectUrl, setprojectUrl] = useState(null);
    const [media, setMedia] = useState(null);
    const [uPosts, setUPosts] = useState([]);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setMedia(file);
    };
    const handlePost = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("textInfo", textInfo);
        formData.append("projectUrl", projectUrl);
        formData.append("media", media);

        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/userPost/postUserPost",
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setTextInfo("");
            setprojectUrl("");
            setMedia(null);
            toast.success(data.message);
            console.log(data);
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error)
        }
    }


    useEffect(() => {
        console.log()
        try {
            axios.get("http://localhost:4000/api/v1/userPost/getallJobs", {
                withCredentials: true,
            })
                .then((res) => {
                    setUPosts(res.data.userPost);
                    console.log(res.data.userPost);
                });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }, []);


    return (
        <>
            <div className='container-grid Home-body'>
                <Header></Header>
                <main className="main-homepage container">
                    <div className="left-main">
                        <div className="left-main-1">
                            <div className='left-main-img'>
                                <img className="banner" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt='' />
                                <img className="my-picture" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt='' />
                            </div>
                            <div className="about">
                                <h5>Rebecca Adedire</h5>
                                <p>Mental Health Tech. Attract,<br /> Motivate, Retain. Show your <br /> workforce you care</p>
                            </div>
                            <div className="analytics">
                                <h5>Analytics & tool</h5>
                                <p>43 posts impressions</p>
                            </div>
                            <div className="my-item">
                                <p>My items</p>
                            </div>
                        </div>
                        <div className="left-main-2">
                            <div className="page">
                                <img className="mildstrings" src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4749.jpg" alt='' />
                                <h5>Mildstrings</h5>
                                <div className="page-notification">
                                    <p>Page Notification</p>
                                    <p style={{ color: 'blue' }}>1</p>
                                </div>
                                <div className="page-notification">
                                    <p>Page Visitors</p>
                                    <p style={{ color: 'blue' }}>2</p>
                                </div>
                            </div>
                            <p>See Visitor Analytics</p>
                        </div>
                        <div className="left-main-3">
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Attra...</p>
                            </div>
                            <h6>Groups</h6>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Finance Club.</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Future Trend</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Project Manager Commun..</p>
                            </div>
                            <p className="same">Show More <i className="fa fa-angle-down" ></i></p>
                            <h6>Events</h6>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Sexual Health Education</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >How to Find Your Spouse Att..</p>
                            </div>
                            <p className="same">See all</p>
                            <h6>Followed Hashtags</h6>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Startup</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Funding</p>
                            </div>
                            <div className="event-flex">
                                <img className="events" src={calendar} alt='' />
                                <p className="events-p" >Healthcare</p>
                            </div>
                            <p className="same">Show More <i className="fa fa-angle-down" ></i></p>

                            <div className="discover">
                                Discover More
                            </div>
                        </div>
                    </div>

                    <div className="middle-main">
                        <div className="middle-main-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="post-1">
                                <img className="middle-pic" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt='' />
                                <input className="post" type="text" placeholder="Start a post" />
                            </div>
                            <div className="linked-input">
                                <div className="input">
                                    <img className="upload" src={Photo} alt='' />
                                    <p>Photo</p>
                                </div>
                                <div className="input">
                                    <img className="upload" src={video} alt='' />
                                    <p>Video</p>
                                </div>
                                <div className="input">
                                    <img className="upload" src={Photo} alt='' />
                                    <p>Photo</p>
                                </div>
                                <div className="input">
                                    <img className="upload" src={Photo} alt='' />
                                    <p>Photo</p>
                                </div>
                            </div>
                        </div>
                        {uPosts && uPosts.map((element) => {
                            return (
                                <div key={element.id} className="middle-main-2">
                                    <Link>
                                        <div className="post-about">
                                            <div>
                                                <img className="middle-pic" src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt='' />
                                            </div>
                                            <div className='post-about-detailes'>
                                                <p className="name">{element.name}</p>
                                                <p className="name-about">{element.email}</p>
                                                <p className="name-about">{moment(element.userPostCreatedAt).fromNow()} <i className="fa fa-globe" aria-hidden="true"></i></p>
                                            </div>
                                           </div>
                                        <div>
                                            <p>{element.textInfo}</p>
                                        </div>
                                        <img className="post-image" src={element.media.url} alt='' />
                                    </Link>
                                </div>
                            );
                        })}

                    </div>


                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form onSubmit={handlePost}>
                                        <label htmlFor="text"> text </label>
                                        <input type="text" id='text' value={textInfo} onChange={(e) => setTextInfo(e.target.value)} /><br />
                                        <label htmlFor="url"> url </label>
                                        <input type="text" id='url' value={projectUrl} onChange={(e) => setprojectUrl(e.target.value)} /><br />
                                        <label htmlFor="video">video</label>

                                        <input type="file" name="video" id="video"
                                            onChange={handleFileChange} /><br />

                                        <button type='submit'>submit</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
