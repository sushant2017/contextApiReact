import React, { useState, createContext } from "react";
export const titleValueContext = createContext();
export const titleDispatchContext = createContext();
const User = (props) => {
  const [title, setTitle] = useState("test");

  return (
    <titleValueContext.Provider value={title}>
      <titleDispatchContext.Provider value={setTitle}>
        {props.children}
      </titleDispatchContext.Provider>
    </titleValueContext.Provider>
  );
};

export default User;
