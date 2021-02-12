import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../dist/styles/login.css";
import { auth } from "./Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth_) => {
        //logged in, redirect to homepage
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_uppercontainer">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>
        <div className="login_container">
          <div className="login_form">
            <h1>Sign in</h1>
            <form>
              <div>
                <h4>Email or mobile phone number</h4>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <h4>Password</h4>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleLogin} type="submit">
                Sign in
              </button>
            </form>
            <p className="login_policy">
              By continuing, you agree to Amazon's
              <span> Conditions of Use</span> and <span>Privacy Notice.</span>
            </p>
            <p className="login_help">Need Help?</p>
          </div>
        </div>
        <div className="login_newuser">
          <p>New to Amazon?</p>
          <button onClick={handleRegister}>Create your Amazon account</button>
        </div>
      </div>
      <div className="amazon_rights">
        <ul>
          <li>Conditions of Use</li>
          <li>Privacy Notice</li>
          <li>Help</li>
        </ul>
        <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Login;
