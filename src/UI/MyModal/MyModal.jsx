import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  
  const rootClass = [cl.myModal];
  if (visible) {
    rootClass.push(cl.active);
  }

  return (
    <div className={rootClass.join(" ")} onClick={()=>setVisible(false)}>
      <div className={cl.myModalContent} onClick={e=>e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default MyModal;
