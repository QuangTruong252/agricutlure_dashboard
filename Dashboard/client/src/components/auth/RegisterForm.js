import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layouts/Alert";
import avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";
import "../css/AuthForm.css";

const Register = () => {
  //Context
  const { registerUser } = useContext(AuthContext);

  
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  
  const [alert, setAlert] = useState(null);
  
  const { username, email, password, re_password } = registerForm;
  
  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    if (password !== re_password) {
      setAlert({ type: "danger", message: "Password does not match" });
      setTimeout(() => setAlert(null), 2000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      console.log(registerData);
      if (!registerData.success) {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="index.html" onSubmit={register}>
      <img src={avatar} alt="avatar" />
      <div>
        <h2 className="title">Sign Up</h2>
        <AlertMessage info={alert}></AlertMessage>

        <div className="input-div one">
          <div className="i">
            <i className="las la-user" />
          </div>
          <div className="div">
            <input
              type="text"
              className="input"
              placeholder="Username"
              name="username"
              value={username}
              required
              onChange={onChangeRegisterForm}
            />
          </div>
        </div>
        <div className="input-div one">
          <div className="i">
            <i className="las la-envelope" />
          </div>
          <div className="div">
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={onChangeRegisterForm}
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
              placeholder="Password"
              name="password"
              value={password}
              required
              onChange={onChangeRegisterForm}
            />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="las la-key" />
          </div>
          <div className="div">
            <input
              type="password"
              className="input"
              placeholder="Re-Password"
              name="re_password"
              value={re_password}
              required
              onChange={onChangeRegisterForm}
            />
          </div>
        </div>
        <div className="have-account">
          <span>Already have an account?</span>
          <Link to="/login">Sign in</Link>
        </div>
        <button className="btn" type="submit">
          <p>Register</p>
        </button>
      </div>
    </form>
  );
};

export default Register;
