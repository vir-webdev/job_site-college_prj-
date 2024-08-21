import React from "react";
import "./Profile.css";
import Header from "../Layout/Header";

export default function Profile() {
  return (
    <>
    <Header></Header>
      <div className="profile-body mt-5">
        <div className="container">
          <div className="profile-content p-5">
            <div className="profile-first-con">
              <img
                src="https://imgs.search.brave.com/0FpKF5zDndNQhw1swgxPbjD4RtMowUOmdGnUE0V6fVo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDE2NjE1MzgzOTYt/NTNiYTJkMDUxZWVk/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/TnZiRzl5YzN4bGJu/d3dmSHd3Zkh4OE1B/PT0"
                alt=""
                className="profile-first-con-1-img"
              />
              <div
                className="w-100 d-flex gap-3 "
                style={{ marginTop: "-4rem", marginLeft: "3rem" }}
              >
                <img
                  className="profile-first-con-2-img"
                  src="https://imgs.search.brave.com/HZaZ2qWhOt3TEl0vgv_bfZjlC5JPuO8sXfIuQ9rHKs0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE1LzM5LzI0/LzM2MF9GXzYxNTM5/MjQzMl8zRzBSUUs5/QmlZaW1ucWJhZE1v/Vll2TVkzdjFDY3JJ/VC5qcGc"
                  alt=""
                />
                <div className="imge-detail" style={{marginTop:"5rem"}}>
                    <h4>Devang Patel</h4>
                    <p>ui/ux devloper</p>
                </div>

              </div>
            </div>
            <div className="profile-second w-100 d-flex flex-column gap-4">
                <div class="group d-flex w-100 gap-5">
					<label for="Meeting" class="label w-25">Personal Meeting Id</label>
					<input id="Meeting" type="text" class="profile-personal-datiles-input w-75"/>
                    <a href="/">Edit</a>
				</div>
                <hr style={{marginTop:"-6px",marginBottom:"-6px"}}></hr>
                <div class="group d-flex w-100 gap-5">
					<label for="Email" class="label w-25">Email</label>
					<input id="Email" type="text" class="profile-personal-datiles-input w-75"/>
                    <a href="/">Edit</a>
				</div>
                <hr style={{marginTop:"-6px",marginBottom:"-6px"}}></hr>
                <div class="group d-flex w-100 gap-5">
					<label for="Type" class="label w-25">subscription Type</label>
					<input id="Type" type="text" class="profile-personal-datiles-input w-75"/>
                    <a href="/">Edit</a>
				</div>
                <hr style={{marginTop:"-6px",marginBottom:"-6px"}}></hr>
                <div class="group d-flex w-100 gap-5">
					<label for="Time" class="label w-25">Time Zone</label>
					<input id="Time" type="text" class="profile-personal-datiles-input w-75"/>
                    <a href="/">Edit</a>
				</div>
                <hr style={{marginTop:"-6px",marginBottom:"-6px"}}></hr>
                <div class="group d-flex w-100 gap-5">
					<label for="Language" class="label w-25">Language</label>
					<input id="Language" type="text" class="profile-personal-datiles-input w-75"/>
                    <a href="/">Edit</a>
				</div>
                <hr style={{marginTop:"-6px",marginBottom:"-6px"}}></hr>
                <div class="group d-flex w-100 gap-5">
					<label for="pass" class="label w-25">Password</label>
					<input id="pass" type="password" class="profile-personal-datiles-input w-75" data-type="password"/>
                    <a href="/">Edit</a>
				</div>
                <hr style={{marginTop:"-6px",marginBottom:"-6px"}}></hr>
                <div class="group d-flex w-100 gap-5">
					<label for="Devices" class="label w-25">Devives</label>
					<input id="Devices" type="text" class="profile-personal-datiles-input w-75"/>
                    <a href="/">Edit</a>
				</div>
                <hr style={{marginTop:"-6px",marginBottom:"-6px"}}></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
