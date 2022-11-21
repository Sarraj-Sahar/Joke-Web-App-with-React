import React, { useState } from "react";
import { data } from "../Data/jokes_data";
import JokeCard from "../Components/Joke_Card";
function Recent({ jokes }) {
  //   const [Jokes, setJokes] = useState(data);
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "space-around",
  //       }}
  //     >
  //       <h1>Helloooooooo</h1>
  //       {/* {jokes.map((elt) => (
  //         <Joke key={elt.id} joke={elt} />
  //       ))} */}
  //     </div>
  //   );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {jokes.map((elt) => (
        <JokeCard key={elt.id} joke={elt} />
      ))}
    </div>
  );
}
export default Recent;
