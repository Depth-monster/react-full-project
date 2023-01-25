import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import '../styles/App.css'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth','true')
  };

  return (
    <div className="App">
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="input login" />
        <MyInput type="current-password" placeholder="input password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
