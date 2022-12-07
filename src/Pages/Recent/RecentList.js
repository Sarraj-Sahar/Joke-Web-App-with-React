import React, { useState, useEffect } from "react";
import Post from "../../Components/PostCard/post";
import "../Trending/Trending.css";
import Share from "../../Components/sharePost/Share";

function RecentList() {
  const [Jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://jokeproject.onrender.com/jokes/recent")
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
export default RecentList;
