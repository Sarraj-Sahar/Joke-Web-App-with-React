import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logIn } from '../Components/LoginSlice'
function Login(params) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn());
    navigate('/');
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            <b>Username</b>
          </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>
            <b>Password</b>{" "}
          </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit"  />
        </div>
        <div className="RegisterText">
          <a href="Register">Don't have an account ? SignUp</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
