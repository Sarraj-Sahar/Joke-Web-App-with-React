import React, { useState, useEffect } from "react";
import UserCard from "../../Components/UserCard/User_Card";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/SideBar";
import "../Trending/Trending.css";

function LeaderBoard() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jokeproject.onrender.com/users/leaderboard")
      .then((response) => response.json())
      .then((response) => setUsers(response.users));
  }, []);

  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="feed">
          <div className="feedWrapper">
            {Users.map((elt) => (
              <UserCard key={elt.id} user={elt} />
            ))}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default LeaderBoard;
