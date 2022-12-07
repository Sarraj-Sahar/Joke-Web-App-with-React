import "./Trending.css";
import React, { useState, useEffect } from "react";
import Post from "../../Components/PostCard/post";
import Share from "../../Components/sharePost/Share";
function TrendingList() {
  const [Jokes, setJokes] = useState([]);
  //joke list sorted according to likes
  //although Trending should be done according to date AND likes

  useEffect(() => {
    fetch("https://jokeproject.onrender.com/jokes/trending")
      .then((response) => response.json())
      .then((response) => setJokes(response.jokes));
  }, []);

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
