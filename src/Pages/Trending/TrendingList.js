import "./Trending.css";

import React, { useState } from "react";
import { jokesList } from "../../Data/jokes_data";
import Post from "../../Components/PostCard/post";
import { Navbar } from "../../Components/Navbar/Navbar";
import Share from "../../Components/sharePost/Share";
function TrendingList() {
  const [Jokes, setJokes] = useState(
    jokesList
      .slice(0)
      .sort((a, b) => a.likes - b.likes)
      .reverse()
  );
  //joke list sorted according to likes
  //although Trending should be done according to date AND likes
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {Jokes.map((elt) => (
          <Post key={elt.id} joke={elt} />
        ))}
      </div>
    </div>
  );
}
export default TrendingList;
