import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">NOKTA</h3>
          <span className="loginDesc">
            Connect and Laugh with friends around you with NOKTA.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input placeholder="Username" required className="loginInput" />
            <input
              placeholder="Email"
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              <a href="Login">Login to Account</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
