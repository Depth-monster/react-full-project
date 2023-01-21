import React from "react";
import cl from "./Loader.module.css";
//here I had troubles, because i was looking for the class bug. Finally Ive found it and changed to className
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
