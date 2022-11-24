import React, { useState } from "react";
import { jokesList } from "../Data/jokes_data";
import JokeCard from "../Components/Joke_Card";

function Trending() {
  const [Jokes, setJokes] = useState(
    jokesList
      .slice(0)
      .sort((a, b) => a.likes - b.likes)
      .reverse()
  );
  //joke list sorted according to likes
  //although Trending should be done according to date AND likes
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {Jokes.map((elt) => (
        <JokeCard key={elt.id} joke={elt} />
      ))}
    </div>
  );
}
export default Trending;
