import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
  return (
    <div class={cl.center}>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
  <div class={cl.wave}></div>
</div>
  );
};

export default Loader;
