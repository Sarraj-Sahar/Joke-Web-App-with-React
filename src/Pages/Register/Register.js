import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    //dispatch(logIn());
    const credentials = {
      username: username,
      email: email,
      password: password,
    };
    fetch("https://jokeproject.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.username) {
          navigate("/login");
        } else {
          console.log("register failed");
        }
      });
  };

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
            <input
              placeholder="Username"
              required
              className="loginInput"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              placeholder="Email"
              required
              className="loginInput"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              type="password"
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Password Again"
              required
              className="loginInput"
              type="password"
              // onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="loginButton"
              type="submit"
              onClick={handleRegister}
            >
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
