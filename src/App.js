import "../src/styles/App.css";
import {
  BrowserRouter,
  redirect,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./UI/Navbar/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./pages/Error";
import { useLocation } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
