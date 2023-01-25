import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import "../../styles/App.css";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  };
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="navbar__quit">
        <MyButton onClick={logout}>Quit</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
