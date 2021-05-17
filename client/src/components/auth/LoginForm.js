import React, { useState, useContext } from "react";
import avatar from "../../assets/avatar.svg";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layouts/Alert";
import {Link} from "react-router-dom";
import "../css/AuthForm.css";

const Login = () => {
  //Context
  const { loginUser } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      console.log(loginData);
      if (loginData.success) {
      } else {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form action="index.html" onSubmit={login}>
      <img src={avatar} alt="avatar" />
      <h2 className="title">Welcome</h2>
      <AlertMessage info={alert}></AlertMessage>
      <div className="input-div pass">
        <div className="i">
          <i className="las la-user" />
        </div>
        <div className="div">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            required
            onChange={onChangeLoginForm}
          />
        </div>
      </div>
      <div className="input-div pass">
        <div className="i">
          <i className="las la-lock" />
        </div>
        <div className="div">
          <input
            type="password"
            className="input"
            name='password'
            placeholder="Password"
            value={password}
            required
            onChange={onChangeLoginForm}
          />
        </div>
      </div>
      <a href="/forgot_password">Forgot Password?</a>
      <button className="btn" type="submit">
        <p>Login</p>
      </button>
      <Link to='register' className="btn">
        <p>Register</p>
      </Link>
    </form>
  );
};

export default Login;
