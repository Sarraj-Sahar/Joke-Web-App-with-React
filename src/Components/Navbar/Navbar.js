import "./Navbar.css";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  // const { user } = useContext(true);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            N<span style={{ color: "#00d89b" }}>O</span>KTA
          </span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for a joke" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">Welcome Back ! </div>
      {/* <div className="topbarRight">
        {/* /// */}
      {/* <Link to={`/profile/${user.username}`}> */}
      {/* <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          /> */}
      {/* </Link> */}
      {/* /// */}
      {/* <Link to={`/profile/${user.username}`}> }
        <Link to={`/profile`}>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </Link>
      </div> */}
    </div>
  );
}
