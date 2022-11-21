import { NavLink } from "react-router-dom";

export function Filters(params) {
  return (
    <div className="filters">
      <NavLink
        exact
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="Trending"
      >
        Trending
      </NavLink>

      <div class="vl"></div>

      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="Recent"
      >
        Recent
      </NavLink>
      <div class="vl"></div>

      <NavLink
        exact
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="LeaderBoard"
      >
        LearderBoard
      </NavLink>
    </div>
  );
}
