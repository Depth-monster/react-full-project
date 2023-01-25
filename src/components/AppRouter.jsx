import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { privateRoutes } from "../Router/Routes";
import { publicRoutes } from "../Router/Routes";
import Login from "../pages/Login";
import { AuthContext } from "../context/index";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          element={<route.component />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Posts />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          element={<route.component />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
// {/* <Route path="/about" element={<About />} />
//       <Route exact path="/posts" element={<Posts />} />
//       <Route exact path="/posts/:id" element={<PostIdPage />} /> */}
