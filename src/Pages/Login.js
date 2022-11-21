function Login(params) {
  return (
    <div className="form">
      <form>
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
          <input type="submit" />
        </div>
        <div className="RegisterText">
          <a href="Register">Don't have an account ? SignUp</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
