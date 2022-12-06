import "./Sidebar.css";
import { RssFeed, Chat, PlayCircleFilledOutlined } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
              to="/Trending"
            >
              Trending
            </NavLink>
            {/* <span className="sidebarListItemText">Trending</span> */}
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />

            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
              to="/Recent"
            >
              Recent
            </NavLink>
            {/* <span className="sidebarListItemText">Recent</span> */}
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
              to="/LeaderBoard"
            >
              LeaderBoard
            </NavLink>
            {/* <span className="sidebarListItemText">Leaderboard</span> */}
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ProfileCard />
      </div>
    </div>
  );
}
