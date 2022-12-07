import React from "react";
import { Link } from "react-router-dom";
// import Cover from "../../img/cover.jpg";
// import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
const ProfileCard = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  if(user) return <div className="ProfileCard">
      <div className="ProfileImages">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.username}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.upvotes}</span>
            <span>Upvotes</span>
          </div>
          <div className="vl"></div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>;

  return <div className="ProfileCard">
    <div className="ProfileName">
      <Link to="/login">Login here</Link>
    </div> 
  </div>
};

export default ProfileCard;
