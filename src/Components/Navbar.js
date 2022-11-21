export function Navbar(params) {
  return (
    <div class="topnav">
      <a class="active" id="Navtitle" href="/">
        Joke Web App
      </a>
      <div class="topnav-right">
        <h3>Post a Joke !</h3>
        <div class="vl"></div>
        {/* <NavLink
        exact
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/Pages/Trending.js"
      >
        Trending
      </NavLink> */}
        <a href="/login">
          <b>Login</b> <br></br>or <b>Register</b>
        </a>
      </div>
    </div>
  );
}
