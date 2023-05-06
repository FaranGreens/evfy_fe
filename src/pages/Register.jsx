import { useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import { registerUser } from "../scripts/registerUser.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let res = await registerUser(user);

    if (res.data) {
      console.log(res.data);
      if (res.data) {
        alert("Successful, please login");
        navigate("/login");
      }
    } else {
      alert(res.response.data.error);
      if (res.response.data.error === "User already exists") {
        navigate("/login");
      }
    }
  };
  return (
    <div className="form-page">
      <h3 className="center">Register</h3>
      <div className="form-input">
        <label>Enter your username</label>
        <input placeholder="username" name="name" onChange={handleChange} />
        <label>Enter your email</label>
        <input placeholder="email" name="email" onChange={handleChange} />
        <label>Enter your password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button className="form-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <NavLink className="unstyled-hyperlink" to="/login">
        <p>Already have an account? Login</p>
      </NavLink>
    </div>
  );
};

export default Register;
