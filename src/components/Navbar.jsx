import { useContext } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { myContext } from "../Context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(myContext);

  const AuthButton = isAuth ? (
    <span onClick={() => setIsAuth(false)}>Logout</span>
  ) : (
    <NavLink to="login">Login/Register</NavLink>
  );

  return (
    <div className="navbar">
      <h2>
        <NavLink to="/">Home</NavLink>
      </h2>
      <h2>
        <NavLink to="/search">Search</NavLink>
      </h2>
      {/* <h2>{!isAuth ? <NavLink to="login">Login/Register</NavLink> : <Logout setIsAuth={setIsAuth}/>}</h2> */}
      <h2>{AuthButton}</h2>
    </div>
  );
};

export default Navbar;
