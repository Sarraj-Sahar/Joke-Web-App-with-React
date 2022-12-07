import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../Redux/LoginSlice";
import "./Login.css";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";

function Login(params) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    //dispatch(logIn());
    const credentials = {
      username:username,
      password:password
    };
    fetch('https://jokeproject.onrender.com/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((response)=>response.json())
    .then((result)=>{
      console.log(result);
      if(result.token) {
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/");
      } 
      else {
        console.log("incorrect creds");
      }
    })
    
    
    ;
    //navigate("/");
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
              type="Username"
              required
              className="loginInput"
              onChange={e => setUserName(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              onChange={e => setPassword(e.target.value)}
            />
            <button className="loginButton" type="button" disabled={false} onClick={handleLogin}>
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
