import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Filters } from "./Components/Filters";
import Trending from "./Pages/Trending/Trending";
import Recent from "./Pages/Recent/Recent";
import Login from "./Pages/Login/Login";
import LeaderBoard from "./Pages/LeaderBoard/LeaderBoard";
import Register from "./Pages/Register/Register";
import { useState } from "react";
import Home from "./Pages/Home/Home";
function App() {
  const [isLoggedIn, setLogin] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Register />} />

          <Route
            path="/Trending"
            element={
              <div>
                <Trending />
              </div>
            }
          />
          <Route
            path="/Recent"
            element={
              <div>
                <Recent />
              </div>
            }
          />
          <Route
            path="/LeaderBoard"
            element={
              <div>
                <LeaderBoard />
              </div>
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
