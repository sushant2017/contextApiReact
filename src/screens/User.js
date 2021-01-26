import React, { createContext, useState } from "react";
export const UserInformation = createContext(null);
export const UserUpdateInformation = createContext(null);
const User = (props) => {
  const [user, setUser] = useState({
    name: "Sushant",
    token: "sadasdaasdasdasd",
  });
  return (
    <UserInformation.Provider value={user}>
      <UserUpdateInformation.Provider value={setUser}>
        {props.children}
      </UserUpdateInformation.Provider>
    </UserInformation.Provider>
  );
};

export default User;
