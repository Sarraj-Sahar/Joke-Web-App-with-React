import React, { useState } from "react";
import UserCard from "../Components/User_Card";
function LeaderBoard({ users }) {
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
      {users.map((elt) => (
        <UserCard key={elt.id} user={elt} />
      ))}

      <h2>Share Jokes and become a Top User ! </h2>
    </div>
  );
}
export default LeaderBoard;
