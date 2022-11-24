import React, { useState } from "react";
import { jokesList } from "../Data/jokes_data";
import JokeCard from "../Components/Joke_Card";

function Recent() {
  const [Jokes, setJokes] = useState(
    jokesList
      .slice(0)
      .sort(
        (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)
      )
    //sorting by date and time
  );
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
export default Recent;
