import "../src/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../src/context/index";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

//only one dynamic pagination is required

//only one dynamic pagination is required

