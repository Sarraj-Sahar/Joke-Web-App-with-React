import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar } from "./Components/Navbar";
import { Filters } from "./Components/Filters";
import Trending from "./Pages/Trending";
import Recent from "./Pages/Recent";
import Login from "./Pages/Login";
import LeaderBoard from "./Pages/LeaderBoard";
import Register from "./Pages/Register";
import { useState } from "react";

function App() {
  const [isLoggedIn,setLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar login={[isLoggedIn,setLogin]}></Navbar>
        <Filters></Filters>
        <Routes>
          <Route path={"/"} element={<Trending />} />
          <Route path={"Trending"} element={<Trending />} />
          <Route path="Recent" element={<Recent />} />

          <Route path="LeaderBoard" element={<LeaderBoard />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
