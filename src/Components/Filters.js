import { NavLink } from "react-router-dom";

export function Filters(params) {
  return (
    <div className="filters">
      <NavLink
        exact="true"
        className={({ isActive }) => isActive? "navbar__link--active": "navbar__link"} 
        to="Trending"
      >
        Trending
      </NavLink>

      <div className="vl"></div>

      <NavLink
        className={({ isActive }) => isActive? "navbar__link--active": "navbar__link"} 
        to="Recent"
      >
        Recent
      </NavLink>
      <div className="vl"></div>

      <NavLink
        exact="true"
        className={({ isActive }) => isActive? "navbar__link--active": "navbar__link"} 
        to="LeaderBoard"
      >
        LearderBoard
      </NavLink>
    </div>
  );
}
