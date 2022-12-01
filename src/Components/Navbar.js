import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../Redux/LoginSlice'
import { Link } from 'react-router-dom'


export function Navbar(params) {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);
  const dispatch = useDispatch();
  return (
    <div className="topnav">
      <a className="active" id="Navtitle" href="/">
        Joke Web App
      </a>
      <div className="topnav-right">
        <h3>Post a Joke !</h3>
        <div className="vl"></div>
        {/* <NavLink
        exact
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/Pages/Trending.js"
      >
        Trending
      </NavLink> */}
        {!isLoggedIn && 
        <Link to="/login">
          <b>Login</b> <br></br>or <b>Register</b>
        </Link>}
        {isLoggedIn && 
        <Link to="#" onClick={() => dispatch(logOut())}>
          <b>Sign Out</b>
        </Link>}
      </div>
    </div>
  );
}
