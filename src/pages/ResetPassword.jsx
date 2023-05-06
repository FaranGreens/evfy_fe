import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useState } from "react";
import { request_reset_link } from "../scripts/resetPassword";


const ResetPassword = () => {

  const [email, setEmail] = useState({});
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setEmail({email:e.target.value});
  }
  const handleSubmit = async()=>{
    if(email.email){
      let res = await request_reset_link(email);
      console.log(res);
      if(res.data.message){
        alert(res.data.message + " please check your email");
        navigate("/")
      }
      
    }
    else{
      alert('pls enter email');
    }
  }
  return (
    <div className="form-page">
    <h3 className="center">Reset Password</h3>
      <div className="form-input">
        <label>Email</label>
        <input type="text" placeholder="Enter your email" onChange={handleChange}/>
        <button className="form-button" onClick={handleSubmit}>Request Link</button>
      </div>
      <p className="italics">The link will be valid for 30 minutes</p>
      <p>
        <NavLink className="unstyled-hyperlink" to="/register">
          Not a user? Register
        </NavLink>
      </p>
    </div>
  );
};

export default ResetPassword;
