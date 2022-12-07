import "./Sidebar.css";
import WhatshotTwoToneIcon from "@mui/icons-material/WhatshotTwoTone";
import RestoreTwoToneIcon from "@mui/icons-material/RestoreTwoTone";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import Groups3TwoToneIcon from "@mui/icons-material/Groups3TwoTone";

import { NavLink } from "react-router-dom";

import ProfileCard from "../ProfileCard/ProfileCard";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WhatshotTwoToneIcon
              className="sidebarIcon"
              style={{ color: "#FF5722" }}
            />
            <NavLink className="filter" to="/Trending">
              Trending
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <RestoreTwoToneIcon
              className="sidebarIcon"
              style={{ color: "#09d3ac" }}
            />

            <NavLink className="filter" to="/Recent">
              Recent
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <Groups3TwoToneIcon
              className="sidebarIcon"
              style={{ color: "#FFCA28" }}
            />
            <NavLink className="filter" to="/LeaderBoard">
              LeaderBoard
            </NavLink>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ProfileCard />
      </div>
    </div>
  );
}
