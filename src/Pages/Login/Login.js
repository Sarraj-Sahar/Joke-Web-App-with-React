import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../Redux/LoginSlice";
import "./Login.css";
import { CircularProgress } from "@material-ui/core";

function Login(params) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn());
    navigate("/");
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
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
            />
            <button className="loginButton" type="submit" disabled={false}>
              {"Log In"}
              {/* TODO: place circularProgess Bar while fetching user data */}
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )} */}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <a href="Register">Create a New Account</a>
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )} */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
