import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={cl.center}>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
  <div className={cl.wave}></div>
</div>
  );
};

export default Loader;
