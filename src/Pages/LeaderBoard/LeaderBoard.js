import React, { useState } from "react";
import UserCard from "../../Components/UserCard/User_Card";
import { usersList } from "../../Data/users_data";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/SideBar";
import "../Trending/Trending.css";
function LeaderBoard() {
  const [Users, setUsers] = useState(
    usersList
      .slice(0)
      .sort((a, b) => a.upvotes - b.upvotes)
      .reverse()
  );

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

            <h2>Share Jokes and become a Top User ! </h2>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default LeaderBoard;
