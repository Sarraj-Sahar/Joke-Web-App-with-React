import React, { useState } from "react";
import { jokesList } from "../../Data/jokes_data";
import Post from "../../Components/PostCard/post";
import "../Trending/Trending.css";
function RecentList() {
  const [Jokes, setJokes] = useState(
    jokesList
      .slice(0)
      .sort(
        (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)
      )
    //sorting by date and time
  );
  return (
    <div className="feed">
      <div className="feedWrapper">
        {Jokes.map((elt) => (
          <Post key={elt.id} joke={elt} />
        ))}
      </div>
    </div>
  );
}
export default RecentList;
