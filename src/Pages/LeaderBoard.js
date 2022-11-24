import React, { useState } from "react";
import UserCard from "../Components/User_Card";
import { usersList } from "../Data/users_data";

function LeaderBoard() {
  const [Users, setUsers] = useState(
    usersList
      .slice(0)
      .sort((a, b) => a.upvotes - b.upvotes)
      .reverse()
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {Users.map((elt) => (
        <UserCard key={elt.id} user={elt} />
      ))}

      <h2>Share Jokes and become a Top User ! </h2>
    </div>
  );
}
export default LeaderBoard;
