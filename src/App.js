// Final Submission : Added sorting by likes, date and
// Shows most upvoted users in leader board

// PLEASE NOTE: that you need to install all the packages
// we used : "@mui/icons-material/"... to see display properly

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar } from "./Components/Navbar";
import { Filters } from "./Components/Filters";
import Trending from "./Pages/Trending";
import Recent from "./Pages/Recent";
import Login from "./Pages/Login";
import { useState } from "react";
import { jokesList } from "./Data/jokes_data";
import { usersList } from "./Data/users_data";
import LeaderBoard from "./Pages/LeaderBoard";
import Register from "./Pages/Register";
function App() {
  const [Jokes, setJokes] = useState(jokesList);
  const [Users, setUsers] = useState(usersList);

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Filters></Filters>
        <Routes>
          <Route
            path={"/"}
            element={
              <Trending
                // jokes={Jokes.slice(0)
                //   .sort((a, b) => a.date.localeCompare(b.likes))
                //   .reverse()}
                jokes={Jokes.slice(0)
                  .sort((a, b) => a.likes - b.likes)
                  .reverse()}
              />
            }
          />
          <Route
            path={"Trending"}
            element={
              <Trending
                jokes={Jokes.slice(0)
                  .sort((a, b) => a.likes - b.likes)
                  .reverse()}
              />
              //joke list sorted according to likes
              //although Trending should be done according to date AND likes
            }
          />
          <Route
            path="Recent"
            element={
              <Recent
                jokes={Jokes.slice(0).sort(
                  (a, b) =>
                    a.date.localeCompare(b.date) || a.time.localeCompare(b.time)
                )}

                //passed the joke list after sorting it in date and time order
              />
            }
          />

          <Route
            path="LeaderBoard"
            element={
              <LeaderBoard
                // users={Users}
                users={Users.slice(0)
                  .sort((a, b) => a.upvotes - b.upvotes)
                  .reverse()}
              />
            }
          />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
