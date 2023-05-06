import { useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loginFn } from "../scripts/loginFn";
import { myContext } from "../Context";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { setIsAuth } = useContext(myContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (user.email && user.password) {
      // console.log(user.email.split("@")[0]);
      let res = await loginFn(user);
      if (res.data) {
        console.log(res.data);
        setIsAuth(true);
        navigate("/");
      } else {
        console.log(res.response.data);
        if (res.response.data.error === "User does not exist") {
          alert("User does not exist");
          navigate("/register");
        } else {
          alert("Password incorrect");
        }
      }
    }
    else{
      alert('incomplete data');
    }
  };
  return (
    <div className="form-page">
      <h3 className="center">Login</h3>
      <div className="form-input">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <button className="form-button" onClick={handleSubmit}>
          Login
        </button>
      </div>
      <p>
        <NavLink className="italics unstyled-hyperlink" to="/register">
          Register
        </NavLink>
      </p>
      <p>
        <NavLink className="italics unstyled-hyperlink" to="/reset-password">
          Forgot Password?
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
